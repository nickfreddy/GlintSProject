const arrayObject = [
  {
    name: 'Bayu',
    address: [
      {
        name: 'Home',
        address: 'Sumbawa',
      },
      {
        name: 'Home',
        address: 'Malang',
      },
    ],
  },
  {
    name: 'Kim',
    address: [
      {
        name: 'Home',
        address: 'Tangerang',
      },
      {
        name: 'Work',
        address: 'Bandung',
      },
    ],
  },
];

// Array or Object is mutable even if it constant variable
arrayObject[0].address[1].address = 'Surabaya';

console.log(arrayObject[0].address[1].address); // Output: Surabaya because Malang has been changed to Surabaya
