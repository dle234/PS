let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

let board = new Array(N + 1).fill(0).map(() => Array());

for (let i = 0; i < M; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);

  board[x].push(y);
  board[y].push(x);
}
for (let i = 0; i < N + 1; i++) {
  board[i].sort((a, b) => a - b);
}

let BFS = [];
let queue = [];
queue.push(V);
let visited = new Array(N + 1).fill(false);
visited[V] = true;
while (queue.length > 0) {
  let currentNode = queue.shift();
  BFS.push(currentNode);
  for (let i = 0; i < board[currentNode].length; i++) {
    let chainedNode = board[currentNode][i];
    if (visited[chainedNode]) continue;
    queue.push(chainedNode);
    visited[chainedNode] = true;
  }
}

let DFS = [];
let stack = [];

visited = visited.fill(false);
visited[V] = true;
stack.push([V, -1]);

const dfs = (board, v, visited) => {
  visited[v] = true;
  DFS.push(v);

  for (const cur of board[v]) {
    if (!visited[cur]) {
      dfs(board, cur, visited);
    }
  }
};

dfs(board, V, visited);

console.log(DFS.join(" "));
console.log(BFS.join(" "));
