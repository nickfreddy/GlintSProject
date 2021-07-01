/* String method */
const message = 'Hello World and World';

// split
let splitMessage = message.split();
console.log(splitMessage);

// includes
let includesMessage = message.includes('o');
console.log(includesMessage);

// replace
let replaceMessage = message.replace('World', 'Gilang');
console.log(replaceMessage);

// replaceAll (Node.js >= 15 )
// let replaceAllMessage = message.replaceAll('World', 'Gilang');
let replaceAllMessage = message.replace(/World/g, 'Gilang');
console.log(replaceAllMessage);

// toLowercase
let lowercaseMessage = message.toLowerCase();
console.log(lowercaseMessage);

// toUpperCase
let uppercaseMessage = message.toUpperCase();
console.log(uppercaseMessage);

// includes case insensitive
let includesInsensitiveMessage = message.toLowerCase().includes('hello');
console.log(includesInsensitiveMessage);

/* Template Literal */
const amri = 'My name is Amri';
const yhido = 666;
function freddy() {
  return 'My name is freddy';
}

// No template
let noTemplate = amri + ' ' + yhido + ', ' + freddy();
console.log(noTemplate);

// Template literal
let template = `${amri} ${yhido}, ${freddy()}`;
console.log(template);
