let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const adjGraph = new Array(n + 1).fill(0).map(() => Array());

for (let i = 0; i < n - 1; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  adjGraph[x].push(y);
  adjGraph[y].push(x);
}
for (let i = 1; i < n + 1; i++) {
  adjGraph[i].sort((a, b) => a - b);
}

const visited = new Array(n + 1).fill(0);
const isLeafNode = [];

visited[1] = 1;

function dfs(startNode) {
  let cc = 0;
  for (let i = 0; i < adjGraph[startNode].length; i++) {
    const cur = adjGraph[startNode][i];
    if (visited[cur] != 0) continue;
    visited[cur] = visited[startNode] + 1;
    cc++;
    dfs(cur);
  }
  if (cc == 0) isLeafNode.push(startNode);
}

dfs(1);

let answer = 0;
isLeafNode.map((node) => {
  answer += visited[node];
});

console.log((answer - isLeafNode.length) % 2 == 0 ? "No" : "Yes");
