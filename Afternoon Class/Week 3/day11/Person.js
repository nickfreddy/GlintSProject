// Make class Person
class Person {
  // Static property
  static isLife = true;

  // Instance property
  constructor(gender) {
    this.gender = gender;
  }

  // Instance function
  walk() {
    return `${this.talk()} ${this.name} is walking!`;
  }

  // Static function
  static breath() {
    return `Person is breathing`;
  }

  talk() {
    return `${this.name} is talking!`;
  }
}

// Instance method
Person.prototype.greet = function () {
  return `Hello, ${this.name}!`;
};

// Static method
Person.address = function () {
  return `I live in earth!`;
};

module.exports = Person;
