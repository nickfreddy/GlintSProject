const EventEmitter = require('events');
const readline = require('readline');

const my = new EventEmitter();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Login Listener
my.on('login:failed', function (email) {
  console.log(`${email} is failed to login`);
  rl.close();
});

// Login success
my.on('login:success', function (email) {
  console.log(`${email} is successful login`);
  rl.close();
});

function login(email, password) {
  const passwordInDatabase = '123456';

  if (password !== passwordInDatabase) {
    my.emit('login:failed', email);
  } else {
    my.emit('login:success', email);
  }
}

rl.question('Email: ', function (email) {
  rl.question('Password: ', function (password) {
    login(email, password); // Run login function
  });
});
