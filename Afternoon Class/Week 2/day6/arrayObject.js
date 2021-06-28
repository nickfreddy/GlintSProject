const students = [
  {
    name: 'Gilang',
    address: [
      {
        name: 'Home',
        address: 'Palembang',
      },
      {
        name: 'Work',
        address: 'Jakarta',
      },
    ],
  },
  {
    name: 'Yhido',
    address: [
      {
        name: 'Home',
        address: 'Medan',
      },
    ],
  },
];

console.log(students[0].address[1].address);
