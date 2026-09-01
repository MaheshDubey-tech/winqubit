const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');

// Find all arrow functions like `const abc = (...) => {` or `const Xyz = (...) => (`
const arrowFuncRegex = /const\s+([A-Z][a-zA-Z0-9_$]*|[a-z][a-zA-Z0-9_$]*)\s*=\s*(?:\([^)]*\)|[a-zA-Z0-9_$]+)\s*=>/g;
let m;
const arrowFuncs = [];
while ((m = arrowFuncRegex.exec(content)) !== null) {
  arrowFuncs.push({ name: m[1], index: m.index });
}
console.log('Arrow functions:', arrowFuncs);

// Let's also look for all text sections by extracting every single section component
// Let's write a script that breaks down the whole file into each page's content.
