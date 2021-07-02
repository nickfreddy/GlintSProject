// Import events
const EventEmitter = require('events');

// Instance
const my = new EventEmitter(); // Instance object

// Listener
my.on('some event', function () {
  console.log('Hello, kim!');
});

// Emitter
my.emit('some event'); // Go to browser, access http://localhost/api/kim
