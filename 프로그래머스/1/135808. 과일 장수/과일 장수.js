function solution(k, m, score) {
    // 한 상자에 사과 m 개 담기
    // 상자 안의 사과 중 가장 낮은 점수 = p, 한상자 가격 = p*m
    // 가능한 많은 사과 팔았을 때 얻을 수 있는 최대 이익(남는 사과 버림)
    score = score.sort((a,b)=>b-a);
  //score 를 m 단위로 자르기, m 개 담긴 배열 중 가장 작은 수 * m 을 해서 다 더해주기
    let answer =0;
    for(let i=1;i<=score.length;i++){
        if(i%m==0){
            answer+=score[i-1]*m
            
        }
    }
    return answer;
}