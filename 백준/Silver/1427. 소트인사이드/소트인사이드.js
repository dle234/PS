let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const n = input[0].split("").map(Number);

console.log(n.sort((a, b) => b - a).join(""));
