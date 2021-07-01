const fridge = ['Apple', 'Carrot', 'Milk', 'Orange', 'Leech', 'Cabbage'];

// includes
const isAppleExist = fridge.includes('apple');
console.log(isAppleExist);

// includes incase sensitive
let isCarrotExist = false;
fridge.map((item) => {
  if (item.toUpperCase() === 'CARROT') {
    isCarrotExist = true;
  }
});
console.log(isCarrotExist);

// map
let mapFridge = fridge.map((item) => item);
console.log(mapFridge);

// fridge.forEach((item) => {
//   console.log(item);
// });

// filter
let filterFridge = fridge.filter((fruit) => fruit.toLowerCase() !== 'carrot');
console.log(filterFridge);

// join
let joinFridge = fridge.join(', ');
console.log(joinFridge);
// change to array again
let joinString = joinFridge.split(', ');
console.log(joinString);
