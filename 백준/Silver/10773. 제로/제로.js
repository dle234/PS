let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let K = Number(input[0]);

const numbers = [];
for (let i = 1; i < K + 1; i++) {
  const number = Number(input[i]);
  if (number == 0) {
    numbers.pop();
    continue;
  }
  numbers.push(number);
}

console.log(numbers.reduce((acc, cur) => acc + cur, 0));
