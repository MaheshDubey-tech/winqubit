const fs = require('fs');
const content = fs.readFileSync('scratch/extracted/Home.jsx', 'utf8');
const lines = content.split('\n');

console.log('=== Zh (around line 422) ===');
console.log(lines.slice(420, 470).join('\n'));

console.log('\n=== Fh (around line 1200) ===');
console.log(lines.slice(1198, 1250).join('\n'));
