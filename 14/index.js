
function collatz(n, times = 1) {
  while (n > 1) {
    times += 1;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }
  return times;
}
let number = 0;
let len = 0;

for (let i = 0; i < 1000000; i++) {
  const c = collatz(i);
  if (c > number) {
    number = c;
    len = i;
  }
}
console.log(`${number} ${len}`);
