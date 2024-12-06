function solution(board) {
    board = board.map(b => b.split(''));

    const n = board.length;
    const m = board[0].length;
    
    let start =[0,0];
    let end =[0,0];
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=='R')start=[i,j];
           if(board[i][j]=='G')end=[i,j];
        }
    }
    
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    
    const visited = Array.from(Array(n).fill(false),()=>new Array(m).fill(false));
    
    const queue =[[...start,0]];
    visited[start[0]][start[1]]= true;
    
    let answer = 0;
   
    while(queue.length>0){
        
        let [x,y,count] = queue.shift();
        if(x==end[0]&&y==end[1])return count;
    
        // 계속 가다가 D 나 범위를 벗어날떄 멈추고 , count ++ 
        // 만약 멈춘곳이 G 라면 return count
        // 끝까지 갔는데, G를 마주치지 못하면 return -1
        
        for(let i=0;i<4;i++){
            let moveX= x;
            let moveY= y;
            
            while(true){
                let newX = moveX + dx[i];
                let newY = moveY + dy[i];
               
                if(newX <0||newX>=n||newY<0||newY>=m||board[newX][newY]=='D')break
                moveX=newX;
                moveY=newY;
                
            }
          
            if(visited[moveX][moveY])continue;
            visited[moveX][moveY]= true;
            queue.push([moveX,moveY,count+1]);
            
        }
    }
    
    
    
    return -1;
    
}

//R -> G 로 최단거리 구하기.