/* Some string method */
let message = 'Hello World and World';

// Split string
let splitMessage = message.split('');
console.log(splitMessage);

let messageLowerCase = message.toLowerCase();
console.log(messageLowerCase);

let messageUpperCase = message.toUpperCase();
console.log(messageUpperCase);

let replaceMessage = message.replace('World', 'Ruhul');
console.log(replaceMessage);

let replaceAllMessage = message.replace(/World/g, 'Ruhul');
console.log(replaceAllMessage);
