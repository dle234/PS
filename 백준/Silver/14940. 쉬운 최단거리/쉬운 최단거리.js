let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 0은 갈 수 없는 땅이고 1은 갈 수 있는 땅, 2는 목표지점이다.
const [n, m] = input[0].split(" ").map(Number);
let V = [0, 0];
const answer = Array.from(Array(n).fill(-1), () => new Array(m).fill(-1));

const map = input.slice(1).map((row, RowIndex) =>
  row.split(" ").map((element, index) => {
    if (Number(element) == 2) {
      V = [RowIndex, index];
    }
    if (Number(element) == 0) {
      answer[RowIndex][index] = 0;
    }
    return Number(element);
  })
);

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from(Array(n).fill(false), () =>
  new Array(m).fill(false)
);
const queue = [];

queue.push([...V, 0]);

answer[V[0]][V[1]] = 0;
visited[V[0]][V[1]] = true;

while (queue.length > 0) {
  let cur = queue.shift();
  let [x, y, count] = cur;
  for (let i = 0; i < 4; i++) {
    let moveX = x + dx[i];
    let moveY = y + dy[i];

    if (moveX >= n || moveY >= m || moveX < 0 || moveY < 0) continue;
    if (moveY >= m) continue;
    if (visited[moveX][moveY]) continue;
    if (map[moveX][moveY] == 0) {
      answer[moveX][moveY] = 0;
      continue;
    }

    visited[moveX][moveY] = true;
    queue.push([moveX, moveY, count + 1]);
  }
  answer[x][y] = count;
}

answer.map((a) => {
  console.log(a.join(" "));
});
