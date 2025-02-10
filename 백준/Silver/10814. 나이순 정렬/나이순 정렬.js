let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr = arr.sort((a, b) => a[0] - b[0]);

arr.forEach((e) => console.log(e[0], e[1]));
