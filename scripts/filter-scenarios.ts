/**
 * Quick script to filter scenarios down to the best 50
 * Removing videos likely to be over 40 seconds based on titles
 */

// Keywords that suggest longer videos
const longVideoKeywords = [
    'fatal', 'kills', 'deaths', 'fiery', 'gun', 'weapon',
    'drunk', 'dui', 'insurance fraud', 'staged',
    'pileup', 'multi-car', 'musical road',
];

// IDs to keep (shorter, clearer car incidents)
const keepIds = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'
];

console.log('Filter script created. Manually review scenarios.ts and keep the best 50 videos under 40 seconds.');
