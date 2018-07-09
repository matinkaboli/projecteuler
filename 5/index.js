for (let i = 1;; i++) {
  let count = 0;
  for (let j = 1; j < 20; j++) {
    if (i % j === 0) {
      count += 1;
    }
  }
  if (count === 19) {
    console.log(i);
    break;
  }
}
