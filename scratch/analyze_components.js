const fs = require('fs');
const content = fs.readFileSync('scratch/bundle_formatted.js', 'utf8');

// Let's search for all top-level components or page renderers
// In Vite/React bundle, components are defined as functions returning JSX (e.g. e.jsxs( or e.jsx()
// Let's write a script to search for sections for each page:
// 1. Home
// 2. About
// 3. Leadership
// 4. Students
// 5. Programs
// 6. Innovation
// 7. Partners
// 8. Events
// 9. Resources
// 10. Contact
// 11. Modals (InnovateModal, CollaborateModal)
// 12. Navbar, Footer, Top Bar

const sections = {
  Home: [],
  About: [],
  Leadership: [],
  Students: [],
  Programs: [],
  Innovation: [],
  Partners: [],
  Events: [],
  Resources: [],
  Contact: [],
  Modals: [],
  Data: []
};

// Let's search for constants and arrays defined in the bundle
// Find all array constants with title, description, name, etc.
const lines = content.split('\n');
console.log('Total formatted lines:', lines.length);

// Let's write out extracted component chunks and data objects to a file for easy reading
fs.writeFileSync('scratch/bundle_lines_count.txt', `Total lines: ${lines.length}`);
