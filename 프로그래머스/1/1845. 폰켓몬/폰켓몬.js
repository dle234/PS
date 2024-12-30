function solution(nums) {
    const n = nums.length;
    let array=nums;
    const set = new Set(array);
    const setNumber = set.size;
  
    return setNumber>=n/2?n/2:setNumber
}

// n/2 포켓몬 가져감
// 같은 종류의 포켓몬은 같은 번호를 가지고 있음.
// 최대한 많은 종류의 포켓몬 선택
// n/2 개 뽑는데, 종류 최대한 다양하게 뽑을 때의 종류 수 구하기
