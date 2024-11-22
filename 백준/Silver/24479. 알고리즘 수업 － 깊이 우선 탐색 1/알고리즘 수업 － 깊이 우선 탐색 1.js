let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, R] = input[0].split(" ").map(Number);
//N: 정점 수,  M: 간선 수, R: 시작 정점

let board = new Array(N + 1).fill(0).map(() => Array());
for (let i = 0; i < M; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  board[x].push(y);
  board[y].push(x);
}

for (let i = 1; i < N + 1; i++) board[i].sort((a, b) => a - b);

//정점 i 의 방문 순서를 차례로 출력. 방문할 수 없으면 0 출력. 시작 정점의 방문 순서는 1

const visited = new Array(N + 1).fill(false);
const order = new Array(N + 1).fill(0);

let count = 1;

function dfs(currentNode) {
  visited[currentNode] = true;
  order[currentNode] = count++;
  let ableToGo = board[currentNode];
  for (let i = 0; i < ableToGo.length; i++) {
    if (!visited[ableToGo[i]]) {
      dfs(ableToGo[i]);
    }
  }
}

dfs(R);
order.shift();
order.map((number) => {
  console.log(number);
});
