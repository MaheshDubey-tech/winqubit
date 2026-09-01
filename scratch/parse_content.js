const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');

// Let's find nav links, sections, tabs, modal dialogs, data objects
const extracted = JSON.parse(fs.readFileSync('scratch/extracted_strings.json', 'utf8'));

// Filter for headings and descriptive content
const interesting = extracted.filter(s => 
  !s.includes('class') && 
  !s.includes('http') && 
  !s.includes('px') && 
  !s.includes('rem') &&
  !s.includes('var(') &&
  s.trim().length > 0
);

console.log('Interesting text count:', interesting.length);
fs.writeFileSync('scratch/meaningful_content.json', JSON.stringify(interesting, null, 2));

// Let's also look for nav items specifically
// Often nav items are in an array of objects like { label: '...', href: '...' } or similar
const arrayMatches = code.match(/\[\s*\{[^\[\]]+\}\s*\]/g);
console.log('Array of objects matches count:', arrayMatches ? arrayMatches.length : 0);
if (arrayMatches) {
  fs.writeFileSync('scratch/array_objects.json', JSON.stringify(arrayMatches.slice(0, 50), null, 2));
}
