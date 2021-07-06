class Geometry {
  constructor(name, type) {
    // Abstract
    if (this.constructor === Geometry) {
      throw new Error('Geometry is abstract');
    }

    this.name = name;
    this.type = type;
  }

  whoAmI() {
    console.log(`Who Am I?`);
  }
}

module.exports = Geometry;
