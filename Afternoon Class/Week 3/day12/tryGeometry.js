const Square = require('./Square');
const Geometry = require('./Geometry');

const square1 = new Square(12, 10);
const square2 = new Square(15, 13);

// square1._protectedFunc(); // You can't access the protected

const square1Circ = square1.calculateCircumference('Reza');
const square2Circ = square2.calculateArea('Rangga');
const totalCirc = square1Circ + square2Circ;

const square1Area = square1.calculateArea('Adib');
const square2Area = square2.calculateArea('Gilang');
const totalArea = square1Area + square2Area;

console.log(
  `\nThe total circumference is ${totalCirc} cm and area is ${totalArea} cm2`
);
