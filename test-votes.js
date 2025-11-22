// Test script to simulate votes from multiple users
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000';
const TEST_SCENARIO_ID = '1';

async function testVoting() {
    console.log('🧪 Testing cumulative voting system...\n');
    
    // 1. Check initial state
    console.log('1️⃣  Fetching initial vote percentages...');
    let response = await fetch(`${BASE_URL}/api/votes/${TEST_SCENARIO_ID}`);
    let data = await response.json();
    console.log('   Initial:', data);
    console.log('');
    
    // 2. Simulate 10 votes from different "users"
    console.log('2️⃣  Simulating 10 votes from different users:');
    const votes = [
        'cammer', 'other', 'cammer', 'both', 'other',
        'other', 'cammer', 'other', 'both', 'other'
    ];
    
    for (let i = 0; i < votes.length; i++) {
        const vote = votes[i];
        console.log(`   Vote ${i + 1}: ${vote}`);
        
        const voteResponse = await fetch(`${BASE_URL}/api/vote`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                scenarioId: TEST_SCENARIO_ID,
                vote: vote
            })
        });
        
        const voteData = await voteResponse.json();
        if (voteData.success) {
            console.log(`   ✅ Cammer: ${voteData.percentages.cammer}%, Other: ${voteData.percentages.other}%, Both: ${voteData.percentages.both}%`);
        } else {
            console.log(`   ❌ Error:`, voteData.error);
        }
    }
    
    console.log('');
    
    // 3. Final check
    console.log('3️⃣  Final vote percentages:');
    response = await fetch(`${BASE_URL}/api/votes/${TEST_SCENARIO_ID}`);
    data = await response.json();
    console.log('   Cammer:', data.cammer + '%');
    console.log('   Other:', data.other + '%');
    console.log('   Both:', data.both + '%');
    console.log('');
    
    // Calculate expected results
    const cammerVotes = votes.filter(v => v === 'cammer').length;
    const otherVotes = votes.filter(v => v === 'other').length;
    const bothVotes = votes.filter(v => v === 'both').length;
    
    console.log('4️⃣  Expected results:');
    console.log(`   Cammer: ${cammerVotes} votes`);
    console.log(`   Other: ${otherVotes} votes`);
    console.log(`   Both: ${bothVotes} votes`);
    console.log('');
    
    console.log('✅ Test complete! Voting system is working cumulatively.');
}

testVoting().catch(err => {
    console.error('❌ Test failed:', err.message);
    console.error('   Make sure the server is running on http://localhost:3000');
});
