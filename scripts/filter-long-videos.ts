import fs from 'fs';

const content = fs.readFileSync('src/lib/scenarios.ts', 'utf8');
const match = content.match(/export const SCENARIOS: Scenario\[\] = \[([\s\S]*?)\];/);

if (!match) {
    console.error('Could not find SCENARIOS array');
    process.exit(1);
}

// For now, just log - we'll need to manually check video lengths
// or you can tell me which scenarios to remove
console.log('Found scenarios array. Manual filtering needed - which videos are over 25s?');
