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

/* And Operator */
// Simple Example
let f = 1;
let g = 2;
let h = 5;
let i = 5;

console.log(f == g && c == d); // false
console.log(f == 1 && h == i); // true

// More example
let result;
if (h == i) {
  result = 'h is equal to i';
}

console.log('result', result); // h is equal to i

// More example
let result2 = h == i && 'h is equal to i' && 'my name is Gilang' && 'adib';
console.log('result2', result2);

/* OR Operators */
console.log(f == g || h == i); // true

let j = null;
let k = j || 'my name is yhido' || 'my name is rangga';
console.log(k);
