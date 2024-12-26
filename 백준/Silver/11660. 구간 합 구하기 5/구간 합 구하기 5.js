let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const [n, m] = input[0].split(" ").map(Number);
let map = new Array(n + 1).fill(0).map(() => Array(n + 1));
let point = [];
let count = new Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));

for (let i = 1; i < n + m + 1; i++) {
  if (input[i] !== "" && i < n + 1) {
    input[i].split(" ").forEach((element, index) => {
      map[i][index + 1] = Number(element);
    });
  }
  if (input[i] !== "" && i >= n + 1) {
    point.push(input[i].split(" ").map(Number));
  }
}
// count[1][1] = map[1][1];

// for (let i = 2; i < n + 1; i++) {
//   count[1][i] = count[1][i - 1] + map[1][i];
// }
// for (let i = 2; i < n + 1; i++) {
//   count[i][1] = count[i - 1][1] + map[i][1];
// }

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    count[i][j] =
      map[i][j] + count[i - 1][j] + count[i][j - 1] - count[i - 1][j - 1];
  }
}

function getHap(x1, y1, x2, y2) {
  let hap = 0;
  let a = 0;
  a = count[y1 - 1][x2] + count[y2][x1 - 1] - count[y1 - 1][x1 - 1];
  hap = count[y2][x2] - a;
  return hap;
}

point.forEach((p) => {
  console.log(getHap(p[1], p[0], p[3], p[2]));
});
