function solution(food) {
    var answer = '';
    var array = []
    for(let i=1;i<food.length ;i++){
        if(food[i]<2)continue
        for(let j =0;j<parseInt(food[i]/2);j++){
            answer += i
        }
    
    }
    answer += '0'
     for(let i=food.length;i>0 ;i--){
        if(food[i]<2)continue
        for(let j =0;j<parseInt(food[i]/2);j++){
            answer += i
        }
    
    }
    

    return answer;
}