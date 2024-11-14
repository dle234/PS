let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = input[0];
const timeList = input[1]
  .split(" ")
  .map((time) => Number(time))
  .sort((a, b) => a - b);
let totalTimeList = [];
totalTimeList[0] = timeList[0];

for (let i = 1; i < timeList.length; i++) {
  totalTimeList[i] = totalTimeList[i - 1] + timeList[i];
}

console.log(totalTimeList.reduce((acc, cur) => acc + cur, 0));
