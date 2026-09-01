const fs = require('fs');
const content = fs.readFileSync('scratch/app_components_formatted.js', 'utf8');

// Let's find where activeTab is rendered
const pos = content.indexOf('activeTab');
console.log('activeTab positions:');
let p = 0;
while ((p = content.indexOf('activeTab', p)) !== -1) {
  console.log(p, content.substring(p - 50, p + 100).replace(/\n/g, ' '));
  p += 9;
}
