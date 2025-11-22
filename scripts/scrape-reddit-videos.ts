#!/usr/bin/env node

/**
 * Reddit Dashcam Video Scraper
 * 
 * Fetches video posts from r/IdiotsInCars, r/Dashcam, and r/Roadcam
 * Extracts direct video URLs from Reddit's v.redd.it CDN
 * Analyzes titles to label vehicles
 * Outputs scenarios in the format needed for scenarios.ts
 */

import fs from 'fs';

const SUBREDDITS = ['IdiotsInCars', 'Dashcam', 'Roadcam'];
const POSTS_TO_FETCH = 300; // Target number of videos
const MIN_VIDEO_SCORE = 500; // Higher quality filter

interface RedditPost {
    data: {
        title: string;
        url: string;
        score: number;
        permalink: string;
        is_video: boolean;
        name: string; // fullname for pagination (t3_xxxxx)
        media?: {
            reddit_video?: {
                fallback_url: string;
            };
        };
        secure_media?: {
            reddit_video?: {
                fallback_url: string;
            };
        };
    };
}

interface VehicleDescription {
    color: string;
    type: string;
    isCammer?: boolean;
}

interface Scenario {
    id: string;
    title: string;
    videoUrl: string;
    votes: {
        cammer: number;
        other: number;
        both: number;
    };
    vehicles?: {
        cammer: VehicleDescription;
        other: VehicleDescription;
    };
}

const COLORS = ['White', 'Black', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Brown'];
const TYPES = ['Sedan', 'SUV', 'Truck', 'Van', 'Hatchback', 'Bus', 'Semi', 'Motorcycle', 'Bike', 'Tesla', 'BMW', 'Audi', 'Mercedes', 'Ford', 'Car'];

function analyzeTitle(title: string): { cammer: VehicleDescription, other: VehicleDescription } {
    const lowerTitle = title.toLowerCase();
    
    // Default values
    const cammer: VehicleDescription = { color: 'Unknown', type: 'Car', isCammer: true };
    const other: VehicleDescription = { color: 'Unknown', type: 'Car', isCammer: false };

    // Heuristics for "Other" vehicle
    // Look for Color + Type patterns (e.g., "red truck", "white van")
    for (const color of COLORS) {
        for (const type of TYPES) {
            if (lowerTitle.includes(`${color.toLowerCase()} ${type.toLowerCase()}`)) {
                other.color = color;
                other.type = type;
                break;
            }
        }
        if (other.color !== 'Unknown') break;
    }

    // If no Color+Type found, look for just Type
    if (other.type === 'Car') {
        for (const type of TYPES) {
            if (lowerTitle.includes(type.toLowerCase())) {
                other.type = type;
                break;
            }
        }
    }

    // Special case for "Semi" / "Semi-truck" / "18 wheeler"
    if (lowerTitle.includes('semi') || lowerTitle.includes('18 wheeler') || lowerTitle.includes('trailer')) {
        other.type = 'Semi';
    }
    
    // Special case for "Cop" / "Police"
    if (lowerTitle.includes('cop') || lowerTitle.includes('police')) {
        other.type = 'Police';
        other.color = 'Black/White';
    }

    return { cammer, other };
}

async function fetchRedditPosts(subreddit: string, limit: number, after: string = ''): Promise<{ posts: RedditPost[], after: string }> {
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=${limit}&after=${after}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'DashcamJudge/1.0'
            }
        });

        if (!response.ok) {
            console.error(`Failed to fetch r/${subreddit}: ${response.status}`);
            return { posts: [], after: '' };
        }

        const data = await response.json();
        return { 
            posts: data.data.children,
            after: data.data.after
        };
    } catch (error) {
        console.error(`Error fetching r/${subreddit}:`, error);
        return { posts: [], after: '' };
    }
}

function extractVideoUrl(post: RedditPost): string | null {
    const { data } = post;

    // Check if it's a v.redd.it video
    if (data.is_video && data.media?.reddit_video?.fallback_url) {
        const url = data.media.reddit_video.fallback_url;
        return url.split('?')[0] + '?source=fallback';
    }

    if (data.is_video && data.secure_media?.reddit_video?.fallback_url) {
        const url = data.secure_media.reddit_video.fallback_url;
        return url.split('?')[0] + '?source=fallback';
    }

    return null;
}

function generateRandomVotes(): { cammer: number; other: number; both: number } {
    // Bias towards "Other" being at fault as that's typical for these subs
    const rand = Math.random();
    let other, cammer, both;

    if (rand > 0.3) {
        // Clear "Other" fault (70% chance)
        other = Math.floor(Math.random() * 40) + 50; // 50-90
        cammer = Math.floor(Math.random() * (100 - other));
    } else if (rand > 0.15) {
        // "Cammer" fault (15% chance)
        cammer = Math.floor(Math.random() * 40) + 50;
        other = Math.floor(Math.random() * (100 - cammer));
    } else {
        // "Both" (15% chance)
        both = Math.floor(Math.random() * 40) + 50;
        other = Math.floor(Math.random() * (100 - both) / 2);
        cammer = 100 - both - other;
        return { cammer, other, both };
    }

    both = 100 - cammer - other;
    return { cammer, other, both };
}

async function scrapeAllVideos(): Promise<Scenario[]> {
    const scenarios: Scenario[] = [];
    let id = 51; // Start from 51 as we have 1-50 already

    console.log('🎥 Starting Reddit Dashcam Video Scraper...\n');

    for (const subreddit of SUBREDDITS) {
        console.log(`📡 Fetching posts from r/${subreddit}...`);
        let after = '';
        let subCount = 0;
        
        // Fetch 3 pages per subreddit
        for (let i = 0; i < 3; i++) {
            const result = await fetchRedditPosts(subreddit, 100, after);
            const posts = result.posts;
            after = result.after;

            if (!posts.length) break;

            for (const post of posts) {
                const { data } = post;

                if (data.score < MIN_VIDEO_SCORE) continue;

                const videoUrl = extractVideoUrl(post);
                if (!videoUrl) continue;

                // Deduplication check
                if (scenarios.some(s => s.videoUrl === videoUrl)) continue;

                let title = data.title
                    .replace(/^\[.*?\]\s*/g, '')
                    .replace(/\s+/g, ' ')
                    .trim();

                // Truncate extremely long titles
                if (title.length > 90) {
                    title = title.substring(0, 87) + '...';
                }

                const { cammer, other } = analyzeTitle(title);

                scenarios.push({
                    id: String(id++),
                    title,
                    videoUrl,
                    votes: generateRandomVotes(),
                    vehicles: { cammer, other }
                });

                subCount++;
                if (scenarios.length >= POSTS_TO_FETCH) break;
            }
            
            if (!after) break;
        }
        console.log(`✅ Added ${subCount} videos from r/${subreddit}`);
    }

    console.log(`\n🎉 Total videos found: ${scenarios.length}\n`);
    return scenarios;
}

function generateTypeScriptCode(newScenarios: Scenario[]): string {
    // We need to merge with existing scenarios in a real app, 
    // but here we'll output the new array segment or a full replacement if desired.
    // For now, let's output the FULL file content assuming we want to append these to the existing 1-50.
    
    // Note: In a real automation we would read the existing file, parse it, and append.
    // Here, the user asked to "add hundreds", so I will generate a file that *includes* the previous ones 
    // if I can read them, OR just output the new ones to be appended.
    // The most robust way for the user is to output the whole list.
    
    // Let's read the EXISTING 1-50 from src/lib/scenarios.ts if possible, or hardcode them?
    // Reading the file with regex is risky.
    // I will output the NEW items formatted as a list that can be pasted.
    
    const scenariosCode = newScenarios.map(s => {
        const cammer = s.vehicles!.cammer;
        const other = s.vehicles!.other;
        
        return `    {
        id: '${s.id}',
        title: "${s.title.replace(/"/g, '\\"')}",
        videoUrl: '${s.videoUrl}',
        votes: { cammer: ${s.votes.cammer}, other: ${s.votes.other}, both: ${s.votes.both} },
        vehicles: {
            cammer: { color: '${cammer.color}', type: '${cammer.type}', isCammer: true },
            other: { color: '${other.color}', type: '${other.type}', isCammer: false }
        }
    }`;
    }).join(',\n');

    return `
// APPEND THESE TO SCENARIOS ARRAY IN src/lib/scenarios.ts

${scenariosCode}
`;
}

// Main execution
scrapeAllVideos().then(scenarios => {
    console.log('📝 Generating TypeScript code...\n');
    const code = generateTypeScriptCode(scenarios);
    
    fs.writeFileSync('new_scenarios.ts', code);
    console.log('✅ Saved new scenarios to new_scenarios.ts');
});
