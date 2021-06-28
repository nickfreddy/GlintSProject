/* Simple boolean expression */
let a = 1 == 2; //false
console.log('a', a);

/* Equal Operators */
// Simple
let b = 1 == 2; // false
let c = 1 != 2; // true
console.log('b', b);
console.log('c', c);

// Strict equal
let d = '1' === 1; // false, different datatype will be false
console.log('d', d);

// Less strict equal
let e = '1' == 1; // true
console.log('e ' + e);
