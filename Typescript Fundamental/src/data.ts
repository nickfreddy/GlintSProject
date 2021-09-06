interface Data {
  nik: Number;
  name: String;
  birthday?: Date;
}

const david: Data = {
  nik: 123123123,
  name: 'David',
  birthday: new Date('2021-10-10'),
};

const students: Data[] = [
  {
    nik: 1232321312,
    name: 'Adib',
  },
  {
    nik: 12312321,
    name: 'Gema',
  },
];

console.log(students);
