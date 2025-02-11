let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let [h, w] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let hap = 0;
for (let i = 1; i < w - 1; i++) {
  let leftMax = arr[i];
  for (let j = 0; j < i; j++) {
    leftMax = Math.max(leftMax, arr[j]);
  }

  let rightMax = arr[i];
  for (let j = i + 1; j < w; j++) {
    rightMax = Math.max(rightMax, arr[j]);
  }

  let water = Math.min(leftMax, rightMax) - arr[i];
  if (water > 0) {
    hap += water;
  }
}

console.log(hap);