let primes = [];
let inProgress = 600851475143;
let primeFactors = [];

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function divideNumber(n) {
  for (let i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) {
      inProgress = n / primes[i];
      primeFactors.push(primes[i]);
      break;
    }
  }
}

for (let i = 2; i < 200000; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

while(true) {
  if (!isPrime(inProgress)) {
    divideNumber(inProgress);
  } else {
    break;
  }
}
console.log(inProgress);
