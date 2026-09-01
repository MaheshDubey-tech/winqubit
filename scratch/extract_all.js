const fs = require('fs');
const code = fs.readFileSync('scratch/bundle.js', 'utf8');

// Let's search for identifiable sections or components in the bundle
// Look for text fragments that identify sections
const strings = JSON.parse(fs.readFileSync('scratch/meaningful_content.json', 'utf8'));

// Print long descriptive strings
const headingsAndParagraphs = strings.filter(s => s.length > 25);
console.log('--- Total headings / copy items:', headingsAndParagraphs.length);

fs.writeFileSync('scratch/all_site_copy.txt', headingsAndParagraphs.join('\n\n---\n\n'));

// Let's find specific keywords or menu items in bundle
console.log('\n--- Searching for navigation items ---');
const navMatches = code.match(/["'](Home|About|Tracks|Initiatives|Events|Ecosystem|Mentors|Campuses|Institutions|Contact|Apply|Collaborate|Innovate|Announcements|Committee|Gallery|Ventures|Startups)["']/gi);
console.log('Nav terms:', Array.from(new Set(navMatches || [])));

