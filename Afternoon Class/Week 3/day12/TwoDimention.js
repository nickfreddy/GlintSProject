const Geometry = require('./Geometry');

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, 'Two Dimention');

    // Abstract
    if (this.constructor === TwoDimention) {
      throw new Error('Two Diemention is abstract');
    }
  }

  // Overridding
  whoAmI() {
    super.whoAmI();
    console.log(`I'm ${this.type}`);
  }

  calculateCircumference() {
    console.log(`\n${this.name} Circumference\n====================`);
  }

  calculateArea() {
    console.log(`\n${this.name} Area\n============`);
  }
}

module.exports = TwoDimention;
