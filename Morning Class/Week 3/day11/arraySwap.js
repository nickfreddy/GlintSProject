const fruits = ['Apple', 'Banana', 'Melon', 'Mango', 'Pineapple', 'Carrot'];
const dataNumbers = [];
const randomNumber = Math.floor(Math.random() * 10);

for (let index = 0; index < randomNumber; index++) {
  dataNumbers.push(Math.floor(Math.random() * 100));
}

// Sort
let sortFruits = fruits.sort();
console.log(sortFruits);

let reverseFruits = fruits.reverse();
console.log(reverseFruits);

dataNumbers.sort((a, b) => a - b);
console.log(dataNumbers);

dataNumbers.sort((a, b) => b - a);
console.log(dataNumbers);

// Option 1`
// let temp = fruits[0];
// fruits[0] = fruits[1];
// fruits[1] = temp;
// console.log(fruits);

// Option 2
[fruits[0], fruits[1], fruits[2]] = [fruits[2], fruits[0], fruits[1]];
console.log(fruits);
