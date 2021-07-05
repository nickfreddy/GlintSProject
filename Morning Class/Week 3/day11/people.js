const Person = require('./Person');
const Female = require('./Female');
const Male = require('./Male');

const people = []; // Make people variable

people.push(new Male('Rezki Ade Pratama Putra'));
people.push(new Female('Gema'));
people[0].walk();

// Person.breath(); // Actually, this is a right way to call static method/function
