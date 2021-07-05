const Person = require('./Person');

// This is child class
class Female extends Person {
  constructor(name) {
    super('female');
    this.name = name;
  }
}

module.exports = Female;
