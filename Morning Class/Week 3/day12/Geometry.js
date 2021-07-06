class Geometry {
  constructor(name, type) {
    if (this.constructor === Geometry) {
      throw new Error('Geometry is a abstract class');
    }

    this.name = name;
    this.type = type;
  }

  whoAmI() {
    console.log(`Who Am I?`);
  }
}

module.exports = Geometry;
