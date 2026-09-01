const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');
const lines = content.split('\n');

const components = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Match `  X = ({` or `const X = ({` or `function X(`
  const match = line.match(/^\s*(?:const|let|var)?\s*([A-Za-z0-9_$]+)\s*=\s*(?:\([^)]*\)|[a-zA-Z0-9_$]+)\s*=>/);
  if (match) {
    components.push({ line: i + 1, name: match[1], text: line.trim() });
  }
}

console.log('Found components:', components.length);
components.forEach(c => console.log(`Line ${c.line}: ${c.name} -> ${c.text.substring(0, 80)}`));
