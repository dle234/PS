const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = [];

for (let i = 0; i < input.length; i++) {
  count[i] = input[i] % 42;
}
const answer = new Set([...count]);

console.log(answer.size);
