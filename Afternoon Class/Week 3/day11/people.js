const Person = require('./Person');
const Male = require('./Male');
const Female = require('./Female');

// Make object of Person class
let adib = new Male('Adib Farassy');
console.log(adib.walk());

let rangga = new Female('Rangga Adhi');
console.log(rangga);

// To access static property
// console.log(rangga.isLife); // undefined
console.log(Person.isLife); // true

// To access static method/function
console.log(Person.address());
// console.log(adib.breath()); // Error
