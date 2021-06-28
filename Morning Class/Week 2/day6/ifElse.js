function convertToAlphabetValue(value) {
  // You can use just if or just if else
  if (value > 90) {
    console.log('Great');
  }

  if (value > 80) {
    return 'A';
  } else if (value > 70) {
    return 'B';
  } else if (value > 60) {
    return 'C';
  } else if (value > 50) {
    return 'D';
  } else {
    return 'E';
  }
}

console.log(convertToAlphabetValue(96));
console.log(convertToAlphabetValue(55));
console.log(convertToAlphabetValue(40));
