let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"
let [t, w] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= t; i++) {
  arr.push(Number(input[i]));
}
// 나무는 총 2개.
// t초동안 자두 떨어짐.
// 최대 w번만 움직임.
// arr 는 자두 떨어지는 정보
// 자두가 받을수있는 최대자두 개수

// 이전과 비교할 수 있는 점화식 세우기.

// 각 초마다 이동할지 안할지를 정할 수 있음.
let answer = Array.from({ length: t + 1 }, () => Array(w + 1).fill(0));

for (let j = 0; j <= w; j++) {
  const currentTree = j % 2 === 0 ? 1 : 2;
  if (arr[0] === currentTree) {
    answer[1][j] = 1;
  } else {
    answer[1][j] = 0;
  }
}

for (let i = 2; i <= t; i++) {
  for (let j = 0; j <= w; j++) {
    let current = j % 2 == 0 ? 1 : 2;
    let stay = answer[i - 1][j];
    let move = 0;
    // 지금 상태에서 이동 안한다면 [i][j] 에 들어갈 값은 answer[i - 1][j]와 같음.
    // 지금 상태에서 이동 한다면 [i][j] 에 들어갈 값은 answer[i - 1][j-1] 에 +1 이동한것과 같음.

    // 지금 위치는 current 인데, 위치 이동 없으니까 arr[i-1] 과 위치 같음
    if (current == arr[i - 1]) stay++;
    if (j > 0) {
      move = answer[i - 1][j - 1];
      // 지금 위치는 current 인데, 위치 이동 있으니까 arr[i-1] 과 위치 다름
      if (current != arr[i - 1]) move++;
    }

    answer[i][j] = Math.max(stay, move);
  }
}

let max = 0;
for (let i = 0; i <= w; i++) {
  max = Math.max(max, answer[t][i]);
}
console.log(max);
