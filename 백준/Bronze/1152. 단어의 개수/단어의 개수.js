let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let word = input.length;
if (input[0] == "") word = 0;

console.log(word);
