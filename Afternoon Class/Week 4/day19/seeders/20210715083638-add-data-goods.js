'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('goods', [
      {
        name: faker.commerce.productName(),
        id_supplier: 1,
        price: faker.commerce.price() * 14000,
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.commerce.productName(),
        id_supplier: 2,
        price: faker.commerce.price() * 14000,
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.commerce.productName(),
        id_supplier: 3,
        price: faker.commerce.price() * 14000,
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('goods', null, {});
  },
};
