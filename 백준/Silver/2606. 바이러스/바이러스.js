let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
let board = new Array(N + 1).fill(0).map(() => Array());

for (let i = 0; i < M; i++) {
  let [x, y] = input[i + 2].split(" ").map(Number);

  board[x].push(y);
  board[y].push(x);
}

let queue = [];
let visited = Array(N + 1).fill(false);
visited[1] = true;
queue.push(1);

let count = 0;

while (queue.length > 0) {
  let number = queue.shift();
  for (let i = 0; i < board[number].length; i++) {
    let next = board[number][i];
    if (visited[next]) continue;

    queue.push(next);
    visited[next] = true;
    count++;
  }
}

console.log(count);
