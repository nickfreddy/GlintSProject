/* Array method */
const fridge = ['Apple', 'Carrot', 'Milk', 'Orange', 'Leech', 'Cabbage'];

// Includes
let isAppleExist = fridge.includes(/apple/i);
console.log(isAppleExist);

// Map / Foreach
fridge.map((fruit) => {
  console.log(fruit);
});

// Filter
let isCarrotExist = fridge.filter(
  (fruit) => fruit.toLowerCase() === 'carrot' || fruit.toLowerCase() === 'milk'
);
console.log(isCarrotExist);

// forEach
let doesMilkExist;
fridge.forEach((fruit) => {
  if (fruit.toLowerCase() === 'milk') {
    doesMilkExist = true;
  }
});
console.log(doesMilkExist);
