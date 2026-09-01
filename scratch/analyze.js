const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');

// Find all readable text strings > 15 chars that are English sentences / UI text
const matches = [];
// Regex for quoted strings
const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
let m;
while ((m = strRegex.exec(code)) !== null) {
  const str = m[1] || m[2] || m[3];
  if (str && str.length > 20 && !str.startsWith('M') && !str.includes('xmlns') && !str.includes('http://www.w3.org') && !str.includes('calc(')) {
    matches.push(str);
  }
}

console.log('Unique content strings count:', new Set(matches).size);
fs.writeFileSync('scratch/extracted_strings.json', JSON.stringify(Array.from(new Set(matches)), null, 2));

// Let's also look for state / tabs / pages
const tabMatches = code.match(/["'][a-zA-Z0-9_\-\s]+["']\s*:\s*["'][^"']+["']/g);
console.log('Sample key-value pairs:', (tabMatches || []).slice(0, 20));
