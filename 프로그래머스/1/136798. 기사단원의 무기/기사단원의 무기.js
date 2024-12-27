
function solution(number, limit, power) {
    let p =[1];
    for(let i=2;i<=number;i++){
        let count=1;
        for(let j=1;j<=Math.ceil(i/2);j++){
            if(i%j==0)count++
        }
        
        if(count>limit)count=power
        p.push(count);
    
    }

    return p.reduce((acc,cur)=>acc+cur,0)
    
}

// 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
// 공격력의 제한수치보다 크면, power(정해준 공격력)으로 구매