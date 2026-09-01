const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');

// Let's find the main function containing `{ id: "home", label: "Home" }`
const homePos = content.indexOf('{ id: "home", label: "Home" }');
console.log('Home pos:', homePos);

// Print 500 lines around homePos
const lines = content.split('\n');
const lineIndex = lines.findIndex(l => l.includes('{ id: "home", label: "Home" }'));
console.log('Line index:', lineIndex);

// Let's find all function definitions in app_components_formatted.js
const funcRegex = /function\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)\s*\{/g;
let m;
const funcs = [];
while ((m = funcRegex.exec(content)) !== null) {
  funcs.push({ name: m[1], args: m[2], index: m.index });
}
console.log('Total functions:', funcs.length);

// Print functions near lineIndex or end of file
console.log('Functions list:', funcs.map(f => f.name).join(', '));
