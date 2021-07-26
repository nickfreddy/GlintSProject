const faker = require('faker');
const { good, supplier } = require('../models');

/* Add seeders */
exports.addGoods = async () => {
  const suppliers = await supplier.find();

  for (let i = 0; i < 10; i++) {
    await good.create({
      name: faker.commerce.productName(),
      price: faker.commerce.price() * 14000,
      photo: faker.image.imageUrl(),
      supplier: suppliers[Math.floor(Math.random() * suppliers.length)]._id,
    });
  }
};

/* Delete seeders */
exports.removeGoods = async () => {
  await good.remove();
};
