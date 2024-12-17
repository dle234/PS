function solution(maps) {
    let startNode =[0,0];
    maps = maps.map((e,index)=>{
        let xIndex = e.indexOf('S');
        if(xIndex!=-1)startNode=[xIndex,index];
        return e.split("");
    });
    
    let m = maps.length;
    let n = maps[0].length;
    
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    
    let pullLever = false;
    let visited = Array.from(Array(m).fill(false), () => new Array(n).fill    (false));

    let queue =[[...startNode,0]];
    visited[startNode[1]][startNode[0]]=true;
    
    while(queue.length>0){
       
        let [x,y,count]= queue.shift();
       
        if(maps[y][x]=='L'){
            pullLever=true;
            visited = Array.from(Array(m).fill(false), () => new Array(n).fill(false));
            queue=[];
            visited[y][x]=true;
                           }
        if(pullLever&&maps[y][x]=='E')return count;

        for(let i=0;i<4;i++){
            let newX=x+dx[i];
            let newY=y+dy[i];
            if(newX>=n||newY>=m||newX<0||newY<0)continue;
            if(visited[newY][newX]||maps[newY][newX]=='X')continue;

            queue.push([newX,newY,count+1]);
            visited[newY][newX]=true;
        }

    }

    return -1
}

// 통로 중 미로 탈출구 는 레버 당겨야 열 수 있음.
// 레버는 통로 중 한 칸에 위치
// 레버 칸으로 이동 -> 탈출구로 이동
// 탈출하는데 걸리는 시간 구하기

// 못가는 곳은 x 가 n 이상일때,y 가 m 이상일때, visited 일 때 ,'X' 일 때 continue
// 레버를 갔는지 확인하는 