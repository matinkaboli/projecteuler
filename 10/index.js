const isPrime = number => {
  for (let i = 2; i <= Math.ceil(Math.sqrt(number)); ++i) {
    if (!(number % i)) {
      return false;
    }
  }

  return true;
}

const sumPrimes = stop => {
  let primes = 2;

  for (let i = 2; i < stop; i++) {
    if (isPrime(i)) {
      primes += i;
    }
  }

  return primes;
}

console.log(sumPrimes(2000000));
