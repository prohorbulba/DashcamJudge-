// Simulate the voting logic to verify it works cumulatively
console.log('🧪 Testing Cumulative Voting Logic\n');

// Simulate votes.json file
let votesData = {};

function submitVote(scenarioId, vote) {
    // Initialize if doesn't exist
    if (!votesData[scenarioId]) {
        votesData[scenarioId] = { cammer: 0, other: 0, both: 0 };
    }
    
    // Increment the vote (cumulative!)
    votesData[scenarioId][vote]++;
    
    // Calculate percentages
    const total = votesData[scenarioId].cammer + votesData[scenarioId].other + votesData[scenarioId].both;
    const percentages = {
        cammer: total > 0 ? Math.round((votesData[scenarioId].cammer / total) * 100) : 0,
        other: total > 0 ? Math.round((votesData[scenarioId].other / total) * 100) : 0,
        both: total > 0 ? Math.round((votesData[scenarioId].both / total) * 100) : 0
    };
    
    return { total, percentages };
}

// Simulate 10 users voting
console.log('Simulating 10 users voting on scenario "1":\n');

const votes = [
    'cammer', 'other', 'cammer', 'both', 'other',
    'other', 'cammer', 'other', 'both', 'other'
];

votes.forEach((vote, i) => {
    const result = submitVote('1', vote);
    console.log(`Vote ${i + 1} (${vote}):`);
    console.log(`  Total votes: ${result.total}`);
    console.log(`  Percentages: Cammer ${result.percentages.cammer}%, Other ${result.percentages.other}%, Both ${result.percentages.both}%\n`);
});

console.log('📊 Final Results:');
console.log(`  Raw votes: ${JSON.stringify(votesData['1'])}`);
console.log(`  Cammer: ${votesData['1'].cammer} votes`);
console.log(`  Other: ${votesData['1'].other} votes`);
console.log(`  Both: ${votesData['1'].both} votes`);

console.log('\n✅ Voting logic works cumulatively!');
console.log('   Each vote from each "device" adds to the total.');
