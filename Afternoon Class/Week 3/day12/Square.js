const TwoDimention = require('./TwoDimention');

class Square extends TwoDimention {
  constructor(width, length) {
    super('Square');
    this.width = width;
    this.length = length;
  }

  // Overridding
  whoAmI() {
    super.whoAmI();
    console.log(`I'm ${this.name}`);
  }

  // this is only accessable in this class
  #privateFunc() {
    console.log(`I'm private`);
  }

  // As developer you are prohibited to access this method
  _protectedFunc() {
    console.log(`I'm protected`);
  }

  // Overloading
  calculateCircumference(name) {
    // this.#privateFunc();
    super.calculateCircumference();
    const result = 2 * (this.width + this.length);
    console.log(`${name} is trying to calculate Circumference: ${result} cm`);
    return result;
  }

  calculateArea(name) {
    super.calculateArea();
    const result = this.width * this.length;
    console.log(`${name} is trying to calculate Area: ${result} cm2`);
    return this.width * this.length;
  }
}

module.exports = Square;
