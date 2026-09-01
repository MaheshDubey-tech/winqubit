const fs = require('fs');
const content = fs.readFileSync('scratch/bundle_formatted.js', 'utf8');

// Find data declarations like `const ... = [{...}]` or `var ... = [{...}]`
const dataBlocks = [];
const lines = content.split('\n');

// Let's locate key components:
// We can search for keywords like 'Advisory Council', 'Women-Led', 'Thakur Shyamnarayan', 'Pitch Fest', 'Hackathon', 'Track', 'Resources', etc.
const keywords = [
  { name: 'nav', term: 'label: "Home"' },
  { name: 'hero_home', term: 'DREAM. BUILD. LEAD.' },
  { name: 'stats', term: '500+' },
  { name: 'about', term: 'Empowering the Next Generation' },
  { name: 'pillars', term: 'Women-Led' },
  { name: 'leadership', term: 'Governing Council' },
  { name: 'campuses', term: 'Participating Campuses' },
  { name: 'students', term: 'Student Innovation Lifecycle' },
  { name: 'programs', term: 'Core Programs' },
  { name: 'innovation', term: 'Innovation Tracks' },
  { name: 'partners', term: 'Partner Network' },
  { name: 'events', term: 'Upcoming Events' },
  { name: 'resources', term: 'Knowledge & Download Center' },
  { name: 'contact', term: 'Get in Touch' },
  { name: 'modals', term: 'Apply to WINQubit' }
];

keywords.forEach(k => {
  const lineIdx = lines.findIndex(l => l.includes(k.term));
  console.log(`Keyword "${k.name}" (${k.term}) found at line:`, lineIdx);
});
