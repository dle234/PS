let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

const numbers = [];
for (let i = 0; i < 9; i++) {
  numbers.push(Number(input[i]));
}

let max = Math.max(...numbers);
console.log(max);
// console.log(array);
numbers.forEach((n, index) => {
  if (n == max) console.log(index + 1);
});
