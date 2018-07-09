const letters = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'hundred',
  '1000': 'thousand'
};

function letter(number) {
  const str = number.toString();
  if (str.length === 1) {
    return letters[number];
  } else if (str.length === 2) {
    const first = str.charAt(0);
    const second = str.charAt(1);
    if (second === '0') {
      return letters[first + '0'];
    } else {
      if (parseInt(number) > 10 && parseInt(number) < 20) {
        return letters[str];
      } else {
        return letters[first + '0'] + letters[second];
      }
    }
  } else if (str.length === 3) {
    const first = str.charAt(0);
    const second = str.charAt(1);
    const third = str.charAt(2);
    if (second === '0' && third === '0') {
     return letters[first] +
            letters['100'];
    } else if (third === '0') {
      return letters[first] +
             letters['100'] +
             'and' +
             letters[second + '0'];
    } else if (second === '0') {
      return letters[first] +
             letters['100'] +
             'and' +
             letters[third];
    } else if (parseInt(second + third) > 10 && parseInt(second + third) < 20) {
      return letters[first] +
             letters['100'] +
             'and' +
             letters[second + third];
    } else {
      return letters[first] +
             letters['100'] +
             'and' +
             letters[second + '0'] +
             letters[third]
    }
  } else if (str.length === 4) {
    const first = str.charAt(0);
    return letters[first] +
           letters['1000'];
  }
}
let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += letter(i).length;
}
console.log(sum);
