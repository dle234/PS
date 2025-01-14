let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

const [n, m] = input[0].split(" ").map(Number);
let [x, y, d] = input[1].split(" ").map(Number);
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let room = [];
for (let i = 2; i < n + 2; i++) {
  room.push(input[i].split(" ").map(Number));
}
let direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let queue = [[x, y]];
let count = 0;
// room[x][y] = 2;
while (queue.length > 0) {
  let [x, y] = queue.shift();
  if (room[x][y] == 0) {
    room[x][y] = 2;
    count += 1;
  }

  let canGo = false;
  for (let i = 0; i < 4; i++) {
    //  벽일경우도 처리
    let nextX = x + dx[i];
    let nextY = y + dy[i];
    if (
      room[nextX][nextY] == 0 &&
      nextX < n &&
      nextY < m &&
      nextX >= 0 &&
      nextY >= 0
    ) {
      canGo = true;
      // break;
      continue;
    }
  }

  if (canGo) {
    d = d == 0 ? 3 : d - 1;
    if (room[x + direction[d][0]][y + direction[d][1]] == 0)
      queue.push([x + direction[d][0], y + direction[d][1]]);
    else queue.push([x, y]);
    // 90도 회전 후 전진했을때 빈칸이면 전진
    // 회전 후 전진했을때 이미 칠해져있다면 전진 X
  } else {
    let goX = x + direction[d][0] * -1;
    let goY = y + direction[d][1] * -1;
    if (room[goX][goY] == 1) break;
    // 후진 했을때 1이 아닐 경우 후진
    queue.push([goX, goY]);
  }
}

// 1. 지금 있는 부분 카운트, 3으로 바꾸고
// 2. 만약 주변 모두 3 혹은 1이라면 후진(방향의 반대 방향으로 + 1, direction[d]*(-1) 해주면 됨.)
//                   반대방향이 1이라서 후진할수없다면 중단.
// 3. 만약 청소되지 않은 칸이 있다면 90도 회전 -> d + 1 , 이때 3이면 0으로 바꿔주기
//                  회전 후 앞칸이 청소되어있지 않는다면 + 1 , 아니라면 그대로,,

console.log(count);
