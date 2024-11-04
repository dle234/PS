let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

function sugar(N) {
  let d = [];
  for (let i = 0; i <= num; i++) {
    d[i] = Infinity;
  }
  d[3] = 1;
  d[5] = 1;

  for (let i = 6; i <= N; i++) {
    d[i] = Math.min(d[i - 5] + 1, d[i - 3] + 1);
  }
  return d[N] == Infinity ? -1 : d[N];
}

console.log(sugar(num));

