const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');

// Find all components and texts
// Let's look for sections, titles, navigation items, institutions, features, etc.
// Specifically strings that are clearly UI text
const lines = [];

// Match JSX text strings or object properties
const textRegex = />\s*([^<>{}\n\r]{3,200})\s*</g;
let m;
while ((m = textRegex.exec(code)) !== null) {
  const t = m[1].trim();
  if (t && !t.startsWith('http') && !t.startsWith('M') && !t.includes('keyframes')) {
    lines.push(t);
  }
}

// Match string properties like title: "...", description: "...", name: "..."
const propRegex = /(?:title|subtitle|name|desc|description|label|heading|quote|tagline|role|category|track|summary)\s*:\s*["'`]([^"'`]{3,300})["'`]/gi;
while ((m = propRegex.exec(code)) !== null) {
  lines.push(m[0]);
}

console.log('Total extracted app UI items:', lines.length);
fs.writeFileSync('scratch/app_ui_extracted.txt', lines.join('\n'));

// Let's also find all Lucide icons used
const lucideIcons = code.match(/lucide-react["']\s*:\s*\{([^}]+)\}/g) || [];
console.log('Icons pattern:', lucideIcons);

// Let's search for Navigation menus and pages
const navMatch = code.match(/nav|navigation|navbar|Header|Footer|pages|sections|tracks|institutions/gi);
console.log('Nav keywords count:', navMatch ? navMatch.length : 0);
