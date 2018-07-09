function divisor(n) {
  let sum = 0;
  const sq = Math.round(Math.sqrt(n));

  for (let i = 0; i <= sq; i++) {
    if (n % i === 0) {
      sum += 2;
    }
  }
  if (sq * sq === n) {
    sum -= 1;
  }
  return sum;
}

let number = 0;
let i = 1;

while(divisor(number) < 500) {
  number += i++;
}

console.log(number);
