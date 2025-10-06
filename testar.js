// This file contains intentional ESLint violations to test rules

// Should trigger 'no-var' and 'prefer-const'
const x = 5;

// Should trigger 'no-unused-vars'
const unused = 'this variable is never used';

// Should trigger 'eqeqeq'
if (x == '5') {
  console.log('equal'); // Should trigger 'no-console'
}

// Should trigger 'quotes' and 'semi'
const str = 'double quotes';

// Should trigger 'indent'
function badIndent() {
  return {
    foo: 'bar',
  };
}

// Should trigger 'prefer-arrow-callback'
[1, 2, 3].map((n) => n * 2);

// Correct examples that should NOT trigger ESLint:
const correctVar = 5;

const arr = [1, 2, 3].map((n) => n * 2);

if (x === '5') {
  const result = 'equal';
}

const properString = 'single quotes';

function properIndent() {
  return {
    foo: 'bar',
  };
}
