let arrSq  = [];
let arrSum = [];
for (let i = 1; i <= 100; i++) {
  arrSq.push(i * i);
}
for (let i = 0; i <= 100; i++) {
  arrSum.push(i);
}

arrSum = arrSum.reduce((a, b) => a + b);
arrSum *= arrSum;
arrSq = arrSq.reduce((a, b) => a + b);


console.log(arrSum - arrSq);
