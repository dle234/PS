function solution(priorities, location) {
    var answer = 0;
    var process = [...priorities]
    var newArr = priorities.map((_,index)=>index)

    var key = newArr[location]
    
    while(true){
        console.log(newArr,'newArr')
        let max = Math.max(...process)
        if(process[0]==max){
            answer+=1
            if(key == newArr[0])break;
            process.shift();
            newArr.shift();
            continue;
        }
        else{
            process.push(process[0])
            process.shift();
            newArr.push(newArr[0]);
            newArr.shift();
            continue;
        }
    }
    
    
    return answer;
}