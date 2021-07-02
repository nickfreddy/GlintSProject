/* Usually event used in different stack or service */
// Import event
const EventEmitter = require('events');

// Instance the object event
const my = new EventEmitter();

my.on('Rangga Mazmur', function () {
  console.log('My name is Rangga Mazmur');
});

my.emit('Rangga Mazmur');
