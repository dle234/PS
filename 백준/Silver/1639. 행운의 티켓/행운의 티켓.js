let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let n = input[0];
let arr = n.split("").map(Number);
let max = 0;

for (let i = 2; i <= arr.length; i++) {
  if (i % 2 != 0) continue;

  for (let j = 0; j < arr.length; j++) {
    if (j + i > arr.length) continue;
    let a = arr.slice(j, j + i);
    let center = i / 2;
    let hap = a.reduce((acc, cur, idx) => {
      return idx >= center ? acc - cur : acc + cur;
    }, 0);
    if (hap == 0) max = Math.max(max, i);
  }
}

console.log(max);
