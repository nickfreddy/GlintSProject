let person = {
  name: 'Rezki',
  address: 'Sumbawa',
  isMarried: false,
  'Full Name': 'Rezki Ade Pratama Putra',
};

// The option #1 to call the content of object
console.log(person.name);
// console.log(person.Full Name) // Error

// The option #2 to call the content of object
console.log(person['name']);
console.log(person['Full Name']);

// If spoiler
// If person is married
if (person.isMarried) {
  console.log(person.name + ' is Married');
} else {
  // Else
  console.log(person.name + ' is jomblo');
}
