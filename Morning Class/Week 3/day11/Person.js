// This is parent class
class Person {
  static isLife = true; // you cannot access it in the object

  // When you make a new instance you have to call constructor
  constructor(gender) {
    this.gender = gender;
  }

  // The static method is only can be called with Class.function
  static breath() {
    console.log('Person is breath');
  }

  // This method can only called if you have an object
  walk() {
    this.sayHello();
    if (this.gender === 'male') {
      console.log(`${this.name} is walking!`);
    }
  }

  // You can call sayHello method to another function in this class with this.function
  sayHello() {
    console.log(`${this.name} is saying Hello!`);
  }
}

module.exports = Person;
