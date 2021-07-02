const EventEmitter = require('events');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const my = new EventEmitter();

my.on('login:failed', function (username) {
  console.log(`${username} is failed to login`);
  rl.close();
});

my.on('login:success', function (username) {
  console.log(`${username} is success to login`);
  rl.close();
});

function login(username, password) {
  const passwordInDatabase = '123456';

  if (password !== passwordInDatabase) {
    my.emit('login:failed', username);
  } else {
    my.emit('login:success', username);
  }
}

rl.question('Username: ', (username) => {
  rl.question('Password: ', (password) => {
    login(username, password);
  });
});
