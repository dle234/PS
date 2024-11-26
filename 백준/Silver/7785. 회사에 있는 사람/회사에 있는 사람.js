let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// "/dev/stdin"
const n = Number(input[0]);
const name = new Map();
for (let i = 1; i < n + 1; i++) {
  if (input[i] !== "") {
    let a = input[i].split(" ");

    name.set(a[0], a[1]);
  }
}

let list = name.keys();
let answer = [];

for (let i = 0; i < name.size; i++) {
  const value = list.next().value;
  if (name.get(value) == "enter") {
    answer.push(value);
  }
}

let sortedAnswer = answer.sort((a, b) => (a > b ? -1 : 1));
sortedAnswer.map((answer) => console.log(answer));
