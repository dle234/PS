let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

// 걷는다면 1초 후 앞 뒤로 1칸 이동 가능
// 순간이동 한다면 0초 후 2*X의 위치로 이동

let [n, k] = input[0].split(" ").map(Number);

let queue = [[n, 0]];
let MAX = 100000;
let visited = new Array(MAX + 1).fill(false);
visited[n] = true;

while (queue.length > 0) {
  let [start, time] = queue.shift();
  if (start == k) {
    console.log(time);
    break;
  }

  if (start * 2 <= MAX && !visited[start * 2]) {
    visited[start * 2] = true;
    queue.push([start * 2, time]);
  }
  if (start - 1 >= 0 && !visited[start - 1]) {
    visited[start - 1] = true;
    queue.push([start - 1, time + 1]);
  }
  if (start + 1 <= MAX && !visited[start + 1]) {
    visited[start + 1] = true;
    queue.push([start + 1, time + 1]);
  }
}
