function convertToAlphabetValue(value) {
  // If can be used even it has not else if or else
  // If can be used just with else or else if
  if (value > 90) {
    console.log('Great');
  }

  // If can be used with else if and else
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

console.log(convertToAlphabetValue(92));
console.log(convertToAlphabetValue(65));
console.log(convertToAlphabetValue(45));
