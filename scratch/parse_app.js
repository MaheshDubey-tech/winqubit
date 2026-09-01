const fs = require('fs');
const code = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');

// Let's find all JSX blocks, component declarations, and data structures
// Look for exported or main components
// Let's write a script that identifies the main page components rendered in App()

// Let's find where activeTab or page switching happens
const mainAppMatch = code.match(/function\s+([a-zA-Z0-9_$]+)\s*\([^)]*\)\s*\{[^}]*activeTab[^}]*\}/gs);
console.log('App function search done');

// Let's search for all section titles / headers in the file
const headerMatches = [];
const headerRegex = /children:\s*["']([^"']{4,80})["']/g;
let m;
while ((m = headerRegex.exec(code)) !== null) {
  if (!m[1].includes('className') && !m[1].includes('style')) {
    headerMatches.push(m[1]);
  }
}

fs.writeFileSync('scratch/headers_and_labels.json', JSON.stringify(Array.from(new Set(headerMatches)), null, 2));
console.log('Unique headers/labels count:', new Set(headerMatches).size);
