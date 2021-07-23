const faker = require('faker');
const { supplier } = require('../models');

/* Add seeders */
exports.addSuppliers = async () => {
  for (let i = 0; i < 10; i++) {
    await supplier.create({
      name: faker.name.findName(),
      photo: faker.image.cats(),
    });
  }
};

/* Delete seeders */
exports.removeSuppliers = async () => {
  await supplier.remove();
};
