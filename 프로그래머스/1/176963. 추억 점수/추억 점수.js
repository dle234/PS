function solution(name, yearning, photo) {
        
    
    var answer = photo.map((element)=>{
        let count = 0;
        
        for(let i=0;i<element.length;i++){
            let index = name.indexOf(element[i]);
            if(index==-1)continue;
            count+=yearning[index];
        }
        
        
        return count;
    })
    return answer;
}