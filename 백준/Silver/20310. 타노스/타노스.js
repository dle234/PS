let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let s = input[0];
let zeroNum = s.split("0").length - 1;
let oneNum = s.split("1").length - 1;

zeroNum = Math.floor(zeroNum / 2);
oneNum = Math.floor(oneNum / 2);

console.log(`${"0".repeat(zeroNum)}${"1".repeat(oneNum)}`);
