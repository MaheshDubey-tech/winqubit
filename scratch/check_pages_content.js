const fs = require('fs');
const files = [
  'About.jsx', 'Leadership.jsx', 'Students.jsx', 'Programs.jsx', 
  'Innovation.jsx', 'Partners.jsx', 'Events.jsx', 'Contact.jsx',
  'InnovateModal.jsx', 'JoinModal.jsx', 'CollaborateModal.jsx'
];

files.forEach(f => {
  const content = fs.readFileSync('scratch/extracted/' + f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  console.log(`Length: ${content.length} chars, ${content.split('\n').length} lines`);
  
  // Extract all string literals inside JSX
  const textStrings = [];
  const textRegex = />\s*([^<>{}\n\r]{3,150})\s*</g;
  let m;
  while ((m = textRegex.exec(content)) !== null) {
    const t = m[1].trim();
    if (t && !t.startsWith('http') && !t.startsWith('M')) {
      textStrings.push(t);
    }
  }
  console.log('Sample text elements:', textStrings.slice(0, 10));
});
