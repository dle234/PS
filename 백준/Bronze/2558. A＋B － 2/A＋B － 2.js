let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a + b);
