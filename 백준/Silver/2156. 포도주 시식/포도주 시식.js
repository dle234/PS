let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let n = Number(input[0]);
let p = [];
for (let i = 1; i <= n; i++) {
  p[i] = Number(input[i]);
}
let dp = [];

for (let x = 1; x <= n; x++) {
  if (x == 1) {
    dp[x] = p[x];
    continue;
  } else if (x == 2) dp[x] = p[x] + p[x - 1];
  else if (x == 3) {
    dp[x] = Math.max(p[x - 2] + p[x], p[x - 1] + p[x], p[x - 1] + p[x - 2]);
  } else {
    dp[x] = Math.max(dp[x - 3] + p[x - 1] + p[x], dp[x - 2] + p[x], dp[x - 1]);
  }
}

console.log(dp[n]);
