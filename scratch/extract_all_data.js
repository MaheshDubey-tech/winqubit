const fs = require('fs');
const content = fs.readFileSync('scratch/bundle_formatted.js', 'utf8');

// Let's write an extractor that pulls out all data arrays (arrays of objects with keys like title, name, desc, role, etc.)
const arrayRegex = /const\s+([A-Za-z0-9_$]+)\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);/g;
let m;
const extractedData = {};
while ((m = arrayRegex.exec(content)) !== null) {
  const varName = m[1];
  const arrayCode = m[2];
  try {
    // Evaluate safely or clean up
    // Convert code to valid JSON if possible or save raw JS
    extractedData[varName] = arrayCode;
  } catch (e) {}
}

console.log('Extracted data variable names:', Object.keys(extractedData));
fs.writeFileSync('scratch/all_raw_data_vars.js', Object.entries(extractedData).map(([k, v]) => `export const ${k} = ${v};`).join('\n\n'));
