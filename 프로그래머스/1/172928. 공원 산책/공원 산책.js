function solution(park, routes) {
    let index = [0,0];
    park=park.map((p,yIndex)=>{
        p.split("").forEach((e,xIndex)=>{
            if(e=="S")index=[yIndex,xIndex]
        })
        return p.split("");
    })
  
    let n = park[0].length
    let m = park.length

    let direction = {
        "N":[-1,0],
        "S":[1,0],
        "W":[0,-1],
        "E":[0,1]
    }
//     park.length 보다 크거나 0보다 작은지 확인
//     장애물 X 아닌지 확인
//     만약 갈 수 없다면 다음으로 넘어감
   
    for(route of routes){
      
        let [d,count]= route.split(" ");
        let a = false;
        for(let i=1;i<=count;i++){
            
            let dx = direction[d][1]*i + index[1]
            let dy = direction[d][0]*i + index[0]
           
            if(dx<0||dy<0||dx>=n||dy>=m){
                 a = true;
                break;
                                        }
            if(park[dy][dx]=="X"){
                a = true;
                break;
                                        }
        }
       
        if(!a)index=[direction[d][0]*count + index[0],direction[d][1]*count + index[1]];
        
    }
    return index
    
}