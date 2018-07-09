let arr = [];

for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    let answer = i * j;
    let aStr = answer.toString().split('');
    if (aStr[0] === aStr[aStr.length - 1]) {
      if (aStr[1] === aStr[aStr.length - 2]) {
        if (aStr[2] === aStr[aStr.length - 3]) {
          arr.push(answer);
        }
      }
    }
  }
}

console.log(Math.max(...arr));
