const { addCustomers, removeCustomers } = require('./customers');
const { addGoods, removeGoods } = require('./goods');
const { addSuppliers, removeSuppliers } = require('./suppliers');
const { transaction } = require('../models');

// Add
async function add() {
  await Promise.all([addCustomers(), addSuppliers()]);
  await addGoods();
}

// Remove
async function remove() {
  await Promise.all([
    removeCustomers(),
    removeSuppliers(),
    removeGoods(),
    transaction.remove(),
  ]);
}

if (process.argv[2] === 'add') {
  add()
    .then(() => {
      console.log('Seeders success');
      process.exit(0);
    })
    .catch((err) => console.error(err));
} else if (process.argv[2] === 'remove') {
  remove()
    .then(() => {
      console.log('Seeders deleted');
      process.exit(0);
    })
    .catch((err) => console.error(err));
}
