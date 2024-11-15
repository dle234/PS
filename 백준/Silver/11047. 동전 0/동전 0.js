let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, K] = input[0].split(" ").map((n) => Number(n));
let prices = [];

for (let i = 1; i < N + 1; i++) {
  if (input[i] !== "") {
    prices.push(Number(input[i]));
  }
}

let remind = K;
let result = 0;

for (let i = prices.length - 1; i >= 0; i--) {
  if (prices[i] > remind) continue;
  else {
    if (remind == 0) break;
    result += parseInt(remind / prices[i]);
    remind = remind % prices[i];
  }
}
console.log(result);
