const Person = require('./Person');

// This is child class
class Male extends Person {
  constructor(name) {
    super('male');
    this.name = name;
  }
}

module.exports = Male;
