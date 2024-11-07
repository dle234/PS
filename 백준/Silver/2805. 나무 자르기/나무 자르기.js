let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");
const numbers = input[1].split(" ").map((num) => Number(num));

function getHeight(N, M, numbers) {
  const trees = numbers.sort((a, b) => a - b);

  let start = 0;
  let end = trees[N - 1];
  let answer = 0;

  while (start <= end) {
    let hap = 0;
    let mid = Math.floor((start + end) / 2);

    for (let i = N - 1; i >= 0; i--) {
      if (trees[i] - mid > 0) hap += trees[i] - mid;
      else break;
    }

    if (hap >= M) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(getHeight(N, M, numbers));
