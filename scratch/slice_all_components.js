const fs = require('fs');
const path = require('path');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');
const lines = content.split('\n');

const outDir = 'scratch/extracted';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Let's find the line ranges for each page component
const componentMarkers = [
  { name: 'Navbar', start: 360, end: 650 },
  { name: 'Home', start: 650, end: 3065 },
  { name: 'About', start: 3066, end: 3618 },
  { name: 'Leadership', start: 3619, end: 4049 },
  { name: 'Students', start: 4050, end: 4942 },
  { name: 'Programs', start: 4943, end: 5278 },
  { name: 'Innovation', start: 5279, end: 5640 },
  { name: 'Partners', start: 5641, end: 5976 },
  { name: 'Events', start: 5977, end: 6185 },
  { name: 'Contact', start: 6186, end: 6649 },
  { name: 'InnovateModal', start: 6650, end: 7477 },
  { name: 'JoinModal', start: 7478, end: 8010 },
  { name: 'CollaborateModal', start: 8011, end: 8350 },
  { name: 'Footer_and_App', start: 8351, end: lines.length }
];

componentMarkers.forEach(m => {
  const codeSlice = lines.slice(m.start - 1, m.end).join('\n');
  fs.writeFileSync(path.join(outDir, `${m.name}.jsx`), codeSlice);
  console.log(`Wrote ${m.name}.jsx (${m.end - m.start} lines)`);
});
