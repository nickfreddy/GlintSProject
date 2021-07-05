const Person = require('./Person');

class Male extends Person {
  constructor(name) {
    super('male');
    this.name = name;
  }
}

module.exports = Male;
