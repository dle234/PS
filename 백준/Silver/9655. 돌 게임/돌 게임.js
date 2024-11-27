let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = Number(input[0]);

console.log(n % 2 == 0 ? "CY" : "SK");
