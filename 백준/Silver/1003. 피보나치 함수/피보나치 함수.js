let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let n = Number(input[0]);
let tc = [];
let dp = [
  [1, 0],
  [0, 1],
];
for (let i = 1; i <= n; i++) {
  tc.push(Number(input[i]));
}

function fibo(n) {
  for (let i = 2; i <= n; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }
}

tc.forEach((e) => {
  fibo(e);
  console.log(dp[e].join(" "));
});
