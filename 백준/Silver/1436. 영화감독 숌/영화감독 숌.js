let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0];
// N<10000

let count = 0;
let day = 1;

function isFinal(day) {
  const sixCount = day.toString().split("666").length - 1;
  
  return sixCount >= 1;
}

while (N != count) {
  if (isFinal(day)) count++;
  day++;
}

console.log(day - 1);
