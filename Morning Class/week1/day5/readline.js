// Importing Module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code here!

/*
 * This function is being used to greet people
 * The result of that function should be:
 * "Hello, <name>, looks like you're <age>! And you lived in <city>!"
 *
 * HINT:
 * To get the current year, let say 2020;
 * You can use this code
 *
 * const currentDate = new Date();
 * const currentYear = currentDate.getFullYear();
 * */
function myname(firstName, lastName) {
  // Insert your code here!
  console.log('\nMy name is ' + firstName + ' ' + lastName);
}

// DON'T CHANGE
console.log('What is your name?\n');
// GET First's Name
rl.question('What is your first name? ', (first) => {
  // GET Last's Name
  rl.question('What is your last name? ', (last) => {
    // GET User's Full Name
    myname(first, last);

    rl.close();
  });
});

rl.on('close', () => {
  process.exit();
});
