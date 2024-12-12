let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
const [n, k] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const double = new Set(numbers);
for (let item of double) {
  double[item] = 0;
}

function getEdge() {
  let startIndex = 0;
  let endIndex = 0;
  let length = 0;

  while (n > endIndex && startIndex >= 0) {
 
    let sn = numbers[startIndex];
    let en = numbers[endIndex];

    if (double[en] < k) {
      length =
        length < endIndex - startIndex + 1 ? endIndex - startIndex + 1 : length;
      endIndex += 1;
      double[en] += 1;
    } else if (double[en] >= k) {
      startIndex += 1;
      double[sn] -= 1;
    }
  }
  return length;
}

console.log(getEdge());