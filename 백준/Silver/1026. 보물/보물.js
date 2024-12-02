let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = input[0].split(" ").map(Number);
const [A, B] = input
  .slice(1)
  .map((row) => row.split(" ").map((element) => Number(element)));

const sortedB = B.sort((a, b) => a - b);
const sortedA = A.sort((a, b) => b - a);
let hap = 0;
for (let i = 0; i < n; i++) {
  hap += sortedA[i] * sortedB[i];
}

console.log(hap);
