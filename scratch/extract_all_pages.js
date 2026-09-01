const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');

// Let's find all components by looking for function declarations that return JSX
// In this bundle, let's look for how the pages are rendered:
// Look for where the navigation tabs are evaluated:
// e.g. "home", "about", "leadership", "students", "programs", "innovation", "partners", "events", "resources", "contact"

const tabNames = [
  'home',
  'about',
  'leadership',
  'students',
  'programs',
  'innovation',
  'partners',
  'events',
  'resources',
  'contact'
];

tabNames.forEach(tab => {
  let pos = 0;
  console.log(`\n=== SEARCHING FOR TAB: ${tab} ===`);
  while ((pos = content.indexOf(`"${tab}"`, pos)) !== -1) {
    const snippet = content.substring(Math.max(0, pos - 150), Math.min(content.length, pos + 250));
    console.log(`--- Match at pos ${pos} ---`);
    console.log(snippet.replace(/\n+/g, ' '));
    pos += tab.length + 2;
    if (pos > content.indexOf(`"${tab}"`) + 2000) break; // only first couple
  }
});
