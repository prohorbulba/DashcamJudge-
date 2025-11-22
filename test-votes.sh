#!/bin/bash

# Test voting system with curl
BASE_URL="https://dashcamjudge.onrender.com"
SCENARIO_ID="1"

echo "🧪 Testing cumulative voting system..."
echo ""

# 1. Check initial state
echo "1️⃣  Fetching initial vote percentages..."
curl -s "${BASE_URL}/api/votes/${SCENARIO_ID}" | jq '.'
echo ""

# 2. Submit 10 test votes
echo "2️⃣  Submitting 10 test votes..."
votes=("cammer" "other" "cammer" "both" "other" "other" "cammer" "other" "both" "other")

for i in "${!votes[@]}"; do
    vote="${votes[$i]}"
    echo "   Vote $((i+1)): $vote"
    
    response=$(curl -s -X POST "${BASE_URL}/api/vote" \
        -H "Content-Type: application/json" \
        -d "{\"scenarioId\":\"${SCENARIO_ID}\",\"vote\":\"${vote}\"}")
    
    echo "   Response: $response" | jq -c '.percentages'
done

echo ""

# 3. Final check
echo "3️⃣  Final vote percentages:"
curl -s "${BASE_URL}/api/votes/${SCENARIO_ID}" | jq '.'

echo ""
echo "4️⃣  Expected results:"
echo "   Cammer: 3 votes (30%)"
echo "   Other: 5 votes (50%)"
echo "   Both: 2 votes (20%)"
echo ""
echo "✅ Test complete!"
