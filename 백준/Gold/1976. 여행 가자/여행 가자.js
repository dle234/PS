let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let n = Number(input[0]);
let m = Number(input[1]);

let list = [];
let trip = [];
for (let i = 2; i <= n + 2; i++) {
  if (i == n + 2) {
    trip = input[i].split(" ").map((t) => Number(t) - 1);
    continue;
  }
  list.push(input[i].split(" ").map(Number));
}

let queue = [];
let visited = new Array(n).fill(false);
queue.push(trip[0]);
visited[trip[0]] = true;
while (queue.length > 0) {
  let node = queue.shift();
  let nodeList = list[node];
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i] == "0") continue;
    if (visited[i] == true) continue;

    queue.push(i);
    visited[i] = true;
  }
}
let answer = true;
for (t of trip) {
  if ((visited[t] == false) | (visited[t] == undefined)) {
    answer = false;
    break;
  }
}

console.log(answer ? "YES" : "NO");