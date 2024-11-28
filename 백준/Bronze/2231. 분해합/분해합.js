let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = Number(input[0]);
let answer = 0;

for (let i = 0; i < n; i++) {
  let count = i;
  let divide = i;
  while (divide > 0) {
    count += divide % 10;
    divide = Math.floor(divide / 10);
  }
  if (count == n) {
    if (answer != 0 && i < answer) answer = i;
    if (answer == 0) answer = i;
  }
}

console.log(answer);
