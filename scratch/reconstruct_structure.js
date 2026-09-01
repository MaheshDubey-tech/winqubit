const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');

// Let's find the main App component or state structure
// Look for tabs list: label: "Home", label: "About", etc.
const navRegex = /\{id:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']/g;
let m;
const navItems = [];
while ((m = navRegex.exec(code)) !== null) {
  navItems.push({ id: m[1], label: m[2] });
}
console.log('Navigation items:', navItems);

// Look for subcomponents / views rendered based on active tab/page
// e.g. switch(activeTab) or activeTab === '...'
const tabConditions = code.match(/([a-zA-Z0-9_$]+)\s*===\s*["']([a-zA-Z0-9_\-]+)["']/g) || [];
console.log('Tab conditions:', Array.from(new Set(tabConditions)));

// Extract all big data arrays: Advisory Board, Campuses, Programs, Leadership, Events, Initiatives, Resources, etc.
