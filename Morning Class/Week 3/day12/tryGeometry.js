const Square = require('./Square');

const square1 = new Square(12, 10);
square1.whoAmI();
square1Circ = square1.calculateCircumference('Reza');
square1Area = square1.calculateArea('Reza');

const square2 = new Square(15, 13);
square2Circ = square2.calculateCircumference('Gema');
square2Area = square2.calculateArea('Ruhul');

totalCirc = square1Circ + square2Circ;
totalArea = square1Area + square2Area;
console.log(
  `\n\nTotal area is ${totalArea} cm2 and circumference is ${totalCirc} cm`
);
