const Person = require('./Person');

class Female extends Person {
  constructor(name) {
    super('female');
    this.name = name;
  }
}

module.exports = Female;
