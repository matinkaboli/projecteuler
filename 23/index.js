function checkDivisor(num) {
  let sum = 0;
  const check = Math.ceil(num / 2);
  for (let i = 0; i <= check; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum > num;
}
const abundants = [];

for (let i = 12; i < 28123; i++) {
  if (checkDivisor(i)) {
    abundants.push(i);
  }
}
const nonAbundants = [];

for (let i = 0; i < 28123; i++) {
  nonAbundants.push(i);
}

for (let i = 0, len = abundants.length; i < len; i++) {
  for (let j = i; j < 28123; j++) {
    if (abundants[i] + abundants[j] < 28123) {
      nonAbundants[abundants[i] + abundants[j]] = 0;
    } else {
      break;
    }
  }
}

console.log(nonAbundants.reduce((a, b) => a + b));
