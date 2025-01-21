let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
// "test/Test.txt"

let n = Number(input[0]);
let eggs = [];
for (let i = 1; i <= n; i++) {
  eggs.push([...input[i].split(" ").map(Number)]);
}

let maxBroken = 0;

function backtracking(i) {
  //  마지막 계란일 때 깨진 계란 세고 종료
  if (i == n) {
    let broken = eggs.filter((egg) => egg[0] <= 0).length;
    maxBroken = Math.max(maxBroken, broken);
    return;
  }

  // 현재 계란이 깨졌거나 나머지 계란이 모두 깨진 경우 넘어감
  if (
    eggs[i][0] <= 0 ||
    eggs.filter((egg, index) => index !== i && egg[0] > 0).length === 0
  ) {
    backtracking(i + 1);
    return;
  }

  // 본인 제외 다른 계란 깨기
  for (let j = 0; j < n; j++) {
    // 본인이거나 이미 깨진 계란은 pss
    if (i == j || eggs[j][0] <= 0) continue;

    eggs[i][0] -= eggs[j][1];
    eggs[j][0] -= eggs[i][1];

    // 다음 계란으로 진행
    backtracking(i + 1);

    // 상태 복구 (백트래킹)
    eggs[i][0] += eggs[j][1];
    eggs[j][0] += eggs[i][1];
  }
}

backtracking(0);

console.log(maxBroken);
