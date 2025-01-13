let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = Number(input[0]);
let xy = [];
for (let i = 1; i <= n; i++) {
  xy.push(input[i].split(" ").map(Number));
}

xy = xy.sort((a, b) => a[0] - b[0]);

let answer = 0;
let startIndex = xy[0][0];
let endIndex = xy[0][1];

for (let i = 1; i < n; i++) {
  let a = xy[i][0];
  let b = xy[i][1];
  if (endIndex < a) {
    answer += endIndex - startIndex;
    startIndex = a;
    endIndex = b;
    continue;
  }
  if (endIndex < b) {
    endIndex = b;
    continue;
  }
}

answer += endIndex - startIndex;

console.log(answer);
