const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const H = input[1].split(" ");

function ham(N, M, array) {
  let lp = 0;
  let max = 0;

  while (lp < N) {
    let sum = 0;
    for (let rp = lp; rp < N; rp++) {
      if (array[rp] > M) break;
      sum += Number(array[rp]);

      if (rp == N - 1 && sum < M) {
        if (sum > max) {
          return sum;
        }
        break;
      }
      if (sum == M) {
        max = sum;
        break;
      }
      if (sum > M) break;
      if (sum > max) {
        max = sum;
      }
    }
    lp++;
  }

  return max;
}

console.log(ham(Number(N), Number(M), H));
