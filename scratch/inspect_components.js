const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');
const lines = content.split('\n');

const componentLines = [
  { line: 365, name: 'Navbar & Header' },
  { line: 650, name: 'Home Page or Subsections' },
  { line: 3066, name: '$h' },
  { line: 3619, name: 'Ph' },
  { line: 4050, name: 'ep' },
  { line: 4943, name: 'ap' },
  { line: 5279, name: 'lp' },
  { line: 5641, name: 'np' },
  { line: 5977, name: 'ip' },
  { line: 6186, name: 'sp' },
  { line: 6650, name: 'Modal / Form cp' },
  { line: 7478, name: 'Modal / Form rp' },
  { line: 8011, name: 'Modal / Form op' },
  { line: 8350, name: 'Footer / App' }
];

componentLines.forEach(c => {
  const slice = lines.slice(c.line - 1, c.line + 40).join('\n');
  console.log(`\n================== ${c.name} (Line ${c.line}) ==================`);
  console.log(slice);
});
