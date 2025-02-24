let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let t = Number(input[0]);

for (let i = 1; i <= t * 2; i += 2) {
  let n = Number(input[i]);
  let stock = input[i + 1].split(" ").map(Number);
  console.log(calculator(n, stock));
}

function calculator(n, stock) {
  let money = 0;

  let maxPrice = 0;

  for (let i = stock.length - 1; i >= 0; i--) {
    if (stock[i] > maxPrice) {
      maxPrice = stock[i];
    } else {
      money += maxPrice - stock[i];
    }
  }

  return money;
}
