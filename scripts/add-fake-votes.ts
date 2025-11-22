import fs from 'fs';

// Read current scenarios file
const scenariosPath = 'src/lib/scenarios.ts';
const content = fs.readFileSync(scenariosPath, 'utf8');

// Generate realistic small vote distributions
function generateSmallVotes(): { cammer: number; other: number; both: number } {
    const total = Math.floor(Math.random() * 7) + 2; // 2-8 total votes
    
    // Randomly distribute votes with bias toward "other" being at fault
    const distribution = Math.random();
    
    if (distribution < 0.6) {
        // "Other" is clearly at fault (60% of cases)
        const other = Math.floor(total * (0.6 + Math.random() * 0.3));
        const remaining = total - other;
        const cammer = Math.floor(remaining * Math.random());
        const both = remaining - cammer;
        return { cammer, other, both };
    } else if (distribution < 0.85) {
        // "Cammer" is at fault (25% of cases)
        const cammer = Math.floor(total * (0.5 + Math.random() * 0.3));
        const remaining = total - cammer;
        const other = Math.floor(remaining * Math.random());
        const both = remaining - other;
        return { cammer, other, both };
    } else {
        // "Both" or mixed (15% of cases)
        const both = Math.max(1, Math.floor(total * 0.4));
        const remaining = total - both;
        const cammer = Math.floor(remaining * Math.random());
        const other = remaining - cammer;
        return { cammer, other, both };
    }
}

// Replace all votes: { cammer: X, other: Y, both: Z } patterns
let newContent = content;
const votePattern = /votes:\s*\{\s*cammer:\s*\d+,\s*other:\s*\d+,\s*both:\s*\d+\s*\}/g;

newContent = newContent.replace(votePattern, () => {
    const votes = generateSmallVotes();
    return `votes: { cammer: ${votes.cammer}, other: ${votes.other}, both: ${votes.both} }`;
});

// Write back
fs.writeFileSync(scenariosPath, newContent);
console.log('✅ Added realistic fake votes (2-8 votes per scenario)');
