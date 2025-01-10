let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = Number(input[0]);
let dp = [3, 7];
for (let i = 2; i < n; i++) {
  dp[i] = (2 * dp[i - 1] + dp[i - 2]) % 9901;
}
console.log(dp[n - 1]);
