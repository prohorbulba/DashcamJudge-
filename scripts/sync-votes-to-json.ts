import fs from 'fs';

// Read scenarios
const scenariosContent = fs.readFileSync('src/lib/scenarios.ts', 'utf8');

// Extract all scenarios with their votes
const scenarioMatches = [...scenariosContent.matchAll(/id:\s*'(\d+)'[\s\S]*?votes:\s*\{\s*cammer:\s*(\d+),\s*other:\s*(\d+),\s*both:\s*(\d+)\s*\}/g)];

const votesData: any = {};

scenarioMatches.forEach(match => {
    const id = match[1];
    const cammer = parseInt(match[2]);
    const other = parseInt(match[3]);
    const both = parseInt(match[4]);
    
    votesData[id] = { cammer, other, both };
});

// Write to server/votes.json
fs.writeFileSync('server/votes.json', JSON.stringify(votesData, null, 2));
console.log(`✅ Synced ${Object.keys(votesData).length} scenarios to server/votes.json`);
