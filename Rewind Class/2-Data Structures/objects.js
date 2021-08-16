// const data = [
//   {
//     id: 1,
//     name: 'Ruhul Kamali',
//   },
//   {
//     id: 2,
//     name: 'David',
//   },
// ];

const data = {
  asdasdsadasd: {
    name: 'Ruhul Kamali',
    address: 'Padang',
  },
  21321321321: {
    name: 'David',
    address: 'Tanjung Pinang',
  },
};

for (const [key, value] of Object.entries(data)) {
  console.log(value);
}

console.log(data['asdasdsadasd']);
