let person = {
  name: 'Amri',
  address: 'Sumbawa',
  isMarried: true,
  'Full Name': 'Amri Rosadi',
};

// Option #1
console.log(person.name); // Output: Amri
// console.log(person.Full Name) // Error

// Option #2
console.log(person['name']);
console.log(person['Full Name']);

// If else
if (person.isMarried) {
  console.log(person.name + ' has been married');
} else {
  console.log(person.name + ' is single');
}
