const TwoDimention = require('./TwoDimention');

class Square extends TwoDimention {
  constructor(width, length) {
    super('Square');
    this.width = width;
    this.length = length;
  }

  // Overridding
  whoAmI() {
    this.#whoAreWe();
    console.log(`I'm ${this.name}`);
  }

  // Call the parent method in this method
  // The private is only accessed in the class
  #whoAreWe() {
    super._whoAmI();
  }

  // Overloading
  calculateCircumference(whoAreYou) {
    super.calculateCircumference();
    const who = `${whoAreYou} is trying to calculate circumference:`;
    console.log(`${who} ${2 * (this.width + this.length)} cm`);
    return 2 * (this.width + this.length);
  }

  calculateArea(whoAreYou) {
    super.calculateArea();
    const who = `${whoAreYou} is trying to calculate area:`;
    console.log(`${who} ${this.width * this.length} cm2`);
    return this.width * this.length;
  }
}

module.exports = Square;
