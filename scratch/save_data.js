const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/extracted_structured_data.json', 'utf8'));

fs.writeFileSync('scratch/full_template_data.json', JSON.stringify(data, null, 2));
console.log('Saved scratch/full_template_data.json with all 10 core data arrays');
