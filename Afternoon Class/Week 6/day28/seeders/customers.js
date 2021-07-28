const faker = require('faker');
const { customer } = require('../models');

/* Add seeders */
exports.addCustomers = async () => {
  for (let i = 0; i < 10; i++) {
    await customer.create({ name: faker.name.findName() });
  }
};

/* Delete seeders */
exports.removeCustomers = async () => {
  await customer.remove();
};
