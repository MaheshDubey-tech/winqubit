const fs = require('fs');
const data = JSON.parse(fs.readFileSync('scratch/extracted_structured_data.json', 'utf8'));

// Array 1: Nav items
// Array 2: Governing Council members
// Array 3: Mandates / Strategic Responsibilities
// Array 4: Campuses (TSEC, TSDC, TIAT, TIHM) with leadership, faculty, and student leads
// Array 5: Stats
// Array 6: Student Lifecycle (5 steps)
// Array 7: Programs (4 core programs)
// Array 8: Innovation Focus Clusters (6 clusters)
// Array 9: Events
// Array 10: Resources

fs.writeFileSync('scratch/clean_data_export.js', `
// Auto-extracted from reference template
export const NAV_ITEMS = ${data[0]};

export const GOVERNING_COUNCIL = ${data[1]};

export const STRATEGIC_MANDATES = ${data[2]};

export const CAMPUSES = ${data[3]};

export const STATS = ${data[4]};

export const STUDENT_LIFECYCLE = ${data[5]};

export const CORE_PROGRAMS = ${data[6]};

export const INNOVATION_CLUSTERS = ${data[7]};

export const EVENTS = ${data[8]};

export const RESOURCES = ${data[9]};
`);

console.log('Saved scratch/clean_data_export.js');
