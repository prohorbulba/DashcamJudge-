
import fs from 'fs';

// Read the current scenarios file
const content = fs.readFileSync('src/lib/scenarios.ts', 'utf8');

// Extract the SCENARIOS array content (this is a bit hacky but works for simple structure)
// We'll assume the file structure hasn't changed drastically
const match = content.match(/export const SCENARIOS: Scenario\[\] = \[([\s\S]*?)\];/);

if (!match) {
    console.error('Could not find SCENARIOS array');
    process.exit(1);
}

const arrayContent = match[1];

// We need to parse this text back into objects to manipulate them
// Since it's TS code, we can't just JSON.parse it.
// However, we can try to use a regex replacer to update specific fields based on the title.

// Keywords that suggest the cammer is a witness or not involved
const WITNESS_KEYWORDS = [
    'witness', 'saw', 'view', 'front of me', 'ahead', 'caught on', 'dashcam of', 
    'accident', 'crash', 'collision', 'spectator', 'watching'
];

// Keywords that strongly suggest involvement
const INVOLVED_KEYWORDS = [
    'hit me', 'i hit', 'my', 'cut me off', 'brake checked me', 'our', 'us', 'we', 'struck'
];

// Process line by line to be safe
const lines = arrayContent.split('\n');
const newLines = [];
let currentTitle = '';
let insideVehicles = false;
let insideCammer = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detect Title
    const titleMatch = line.match(/title:\s*['"](.+)['"]/);
    if (titleMatch) {
        currentTitle = titleMatch[1].toLowerCase();
    }

    // Check if we are in the vehicles object
    if (line.includes('vehicles: {')) {
        insideVehicles = true;
    }
    
    if (insideVehicles && line.includes('cammer: {')) {
        insideCammer = true;
        
        // Determine if witness
        const isWitness = WITNESS_KEYWORDS.some(k => currentTitle.includes(k)) && 
                         !INVOLVED_KEYWORDS.some(k => currentTitle.includes(k));
                         
        if (isWitness) {
            // Replace the line with Witness info
            newLines.push(`            cammer: { color: 'N/A', type: 'Witness', isCammer: true },`);
            continue; // Skip original line
        }
    }

    newLines.push(line);
}

// Reconstruct file
const newFileContent = content.replace(match[1], newLines.join('\n'));

fs.writeFileSync('src/lib/scenarios.ts', newFileContent);
console.log('Updated scenarios with Witness status');

