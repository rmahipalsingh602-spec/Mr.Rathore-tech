const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const checks = [
  'assets/mahadev-cv.css',
  'assets/vendor/three.min.js',
  'assets/vendor/gsap.min.js',
  'assets/mahadev-cv.js',
  'id="cute-cursor-container"',
  'id="mahadev-cv-top"',
  'id="cv-3d-canvas"',
  'id="cv-printable-modal"',
  'NETRA AI',
  'RAIN AI',
  'VYOM',
  'RUDRA TREE EYS',
  'EKASHRINGA Engine',
  'Bhinmal, Rajasthan',
  'ramhipalsingh602@gmail.com',
];

let allPassed = true;
for (const c of checks) {
  if (html.includes(c)) {
    console.log('✓ Found:', c);
  } else {
    console.error('✗ Missing:', c);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
