function solution(s) {
    let stringArr = s.split("");
    let answer =[];

    for(let i=0;i<stringArr.length;i++){
        let newArr = stringArr.slice(0,i);
        let lastIndex = newArr.lastIndexOf(stringArr[i]);
        let index = lastIndex==-1?-1:i-lastIndex;
        answer.push(index)
    }
    return answer;
}

// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 처음이라면 -1 push
