let primes = 2;

const isPrime = n => {
  const half = Math.ceil(n / 2);
  for (let i = 2; i <= half; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = 2; i < 2000000; i++) {
  if (i % 2 == 1) {
    if (isPrime(i)) {
      primes += i;
    }
  }
}
console.log(primes);
