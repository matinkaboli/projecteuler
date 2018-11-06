function sort(number) {
  return parseInt((number).toString().split('').sort((a, b) => a - b).join(''));
}

function isDigitsAreTheSame(number1, number2) {
  if (sort(number1) === sort(number2)) {
    return true;
  }

  return false;
}

function isSameDigit(number) {
  if (
    isDigitsAreTheSame(number, number * 2)
    && isDigitsAreTheSame(number, number * 3)
    && isDigitsAreTheSame(number, number * 4)
    && isDigitsAreTheSame(number, number * 5)
    && isDigitsAreTheSame(number, number * 5)
  ) {
    return true;
  }

  return false;
}

let i = 10;

while (true) {
  if (isSameDigit(i)) {
    console.log(i);

    break;
  }

  i++;
}
