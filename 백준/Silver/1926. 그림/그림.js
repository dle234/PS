let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 0은 갈 수 없고, 1은 그림임
const [n, m] = input[0].split(" ").map(Number);
const startIndex = [];
const map = input.slice(1).map((row, rowIndex) =>
  row.split(" ").map((element, columnIndex) => {
    if (Number(element) == 1) {
      startIndex.push([rowIndex, columnIndex]);
    }
    return Number(element);
  })
);

// 그림의 개수, 가장 넓은 그림의 개수 출력하기
// 그림이 없는 경우에는 0 0 출력

// 가장 먼저 있는 1에서 탐색 시작
// 만약 인접노드가 없다면 그림 count +1, 그림 너비도 리스트에 push

// 각 그림의 시작지점 구하기
// 1들을 모아두고, visited에 넣어봐서 false 인 애로 다시 시작하기..

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const visited = Array.from(Array(n).fill(false), () =>
  new Array(m).fill(false)
);

function bfs(startIndex) {
  const queue = [];
  queue.push(startIndex);
  let area = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    area++;
    for (let i = 0; i < 4; i++) {
      let moveX = x + dx[i];
      let moveY = y + dy[i];
      if (moveX >= n) continue;
      if (moveY >= m) continue;
      if (moveX < 0 || moveY < 0) continue;
      if (map[moveX][moveY] == 0) continue;
      if (visited[moveX][moveY]) continue;
      visited[moveX][moveY] = true;
      queue.push([moveX, moveY]);
    }
  }
  return area;
}

const pictures = [];

for (let i = 0; i < startIndex.length; i++) {
  let current = startIndex[i];
  if (!visited[current[0]][current[1]]) {
    visited[current[0]][current[1]] = true;
    let area = bfs(current);
    pictures.push(area);
  }
}

console.log(pictures.length);
console.log(pictures.length == 0 ? 0 : Math.max(...pictures));
