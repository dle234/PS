function solution(keymap, targets) {
    var answer = [];

    targets.map((target,index)=>{
       
        let targetIndexNumber = 0
        for(let i = 0; i<target.length;i++){
         let targetIndex = 10000
         for(let j =0; j<keymap.length ;j++){
            const click = Number(keymap[j].indexOf(target[i]))+1
            if(click == 0)continue;
            if(targetIndex > click||click == 0){
                targetIndex=Number(click);
            }
        }
        if(targetIndex==10000){targetIndexNumber=-1; break;}
        else {
                 targetIndexNumber+=targetIndex;
            }
        
    }
       answer[index]=targetIndexNumber;
        
    })
    
    return answer;
}