const fs = require('fs');
const content = fs.readFileSync('scratch/bundle_formatted.js', 'utf8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);
// Extract from line 13000 to end
const appCode = lines.slice(13000).join('\n');
fs.writeFileSync('scratch/app_components_formatted.js', appCode);
console.log('Saved scratch/app_components_formatted.js, lines:', lines.length - 13000);
