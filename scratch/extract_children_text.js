const fs = require('fs');
const files = [
  'About.jsx', 'Leadership.jsx', 'Students.jsx', 'Programs.jsx', 
  'Innovation.jsx', 'Partners.jsx', 'Events.jsx', 'Contact.jsx',
  'InnovateModal.jsx', 'JoinModal.jsx', 'CollaborateModal.jsx'
];

files.forEach(f => {
  const content = fs.readFileSync('scratch/extracted/' + f, 'utf8');
  console.log(`\n================== ${f} ==================`);
  
  // Extract string literals under children:
  const textStrings = [];
  const regex = /children:\s*(?:\[\s*)?["'`]([^"'`]{3,150})["'`]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    if (!m[1].includes('className') && !m[1].includes('style')) {
      textStrings.push(m[1]);
    }
  }
  console.log('Total texts:', textStrings.length);
  console.log('Sample texts:', textStrings.slice(0, 15));
});
