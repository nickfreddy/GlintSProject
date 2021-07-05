const fruits = [
  'Apple',
  'Banana',
  'Pineapple',
  'Carrot',
  'Orange',
  'Strawberry',
  'Adib Farassy',
  'Amri Rosadi',
];
const numbers = [];
const randomNumber = Math.floor(Math.random() * 10);

for (let index = 0; index < randomNumber; index++) {
  numbers.push(Math.floor(Math.random() * 100));
}

/* Swap array */
// Option #1
// let temp = fruits[0]; // Apple
// fruits[0] = fruits[1]; // Banana
// fruits[1] = temp; // Apple
// console.log(fruits);

// Option #2
[fruits[0], fruits[1], fruits[2]] = [fruits[2], fruits[0], fruits[1]];
console.log(fruits);

/* Sort */
// Sort alphabetic (Merge Sort)
fruits.sort(); // Ascending
console.log(fruits);
fruits.sort().reverse(); // Reverse ascending (descending)
console.log(fruits);

// Sort number (Quick Sort)
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers);
numbers.sort((a, b) => b - a); // Descending
console.log(numbers);
