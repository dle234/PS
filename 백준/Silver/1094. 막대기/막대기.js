let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let x = Number(input[0]);
let bar = [64];

while (true) {
  let barSize = bar.reduce((acc, cur) => acc + cur);
  if (barSize > x) {
    bar = bar.sort((a, b) => a - b);
    let min = bar.shift() / 2;
    bar.push(min);
    if (bar.reduce((acc, cur) => acc + cur) < x) {
      bar.push(min);
    } else if (bar.reduce((acc, cur) => acc + cur) == x) {
      console.log(bar.length);
      break;
    }
  } else {
    console.log(bar.length);
    break;
  }
}
