const Geometry = require('./Geometry');

class TwoDimention extends Geometry {
  constructor(name) {
    super(name, 'Two Dimention');

    if (this.constructor === TwoDimention) {
      throw new Error('Two Dimention is a abstract class');
    }
  }

  // Overridding
  // Protected that means, you can not access it if you are an Object
  _whoAmI() {
    super.whoAmI();
    console.log(`I'm ${this.type}`);
  }

  calculateCircumference() {
    console.log(`\n${this.name} Circumference!\n=====================`);
  }

  calculateArea() {
    console.log(`\n${this.name} Area!\n==============================`);
  }
}

module.exports = TwoDimention;
