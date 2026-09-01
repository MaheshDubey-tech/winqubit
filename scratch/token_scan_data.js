const fs = require('fs');
const content = fs.readFileSync('scratch/bundle_formatted.js', 'utf8');

// Token scan for `[` followed by `{` and ending at matching `]`
let results = [];
let i = 0;
while (i < content.length) {
  if (content[i] === '[' && content[i+1] && (content[i+1] === '{' || content.substring(i, i+10).includes('{'))) {
    // Find matching bracket
    let depth = 0;
    let start = i;
    let inString = false;
    let stringChar = '';
    let escaped = false;
    let valid = true;

    for (let j = i; j < content.length && j < i + 50000; j++) {
      let char = content[j];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === '\\') {
        escaped = true;
        continue;
      }
      if (inString) {
        if (char === stringChar) inString = false;
        continue;
      }
      if (char === '"' || char === "'" || char === '`') {
        inString = true;
        stringChar = char;
        continue;
      }
      if (char === '[') depth++;
      if (char === ']') {
        depth--;
        if (depth === 0) {
          const slice = content.substring(start, j + 1);
          if (slice.includes('title:') || slice.includes('name:') || slice.includes('label:') || slice.includes('tagline:') || slice.includes('question:')) {
            results.push({ start, end: j + 1, length: slice.length, code: slice });
          }
          i = j + 1;
          break;
        }
      }
    }
  }
  i++;
}

console.log('Found structured data arrays:', results.length);
fs.writeFileSync('scratch/extracted_structured_data.json', JSON.stringify(results.map(r => r.code), null, 2));
