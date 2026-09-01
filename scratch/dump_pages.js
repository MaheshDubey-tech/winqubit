const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');
fs.writeFileSync('scratch/bundle_formatted.js', code);
console.log('Saved scratch/bundle_formatted.js');
