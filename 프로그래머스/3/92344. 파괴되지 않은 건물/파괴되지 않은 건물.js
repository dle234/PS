function solution(board, skill) {
    let n = board[0].length;
    let m = board.length
   let count = Array.from(Array(m+1).fill(0), () => new Array(n+1).fill(0));

     for(let i=0;i<skill.length;i++){
        let [type,r1,c1,r2,c2,degree] = skill[i];
        count[r1][c1]+= type==1?-degree:degree;
        count[r1][c2+1]+= type==1?degree:-degree;
        count[r2+1][c1]+= type==1?degree:-degree;
        count[r2+1][c2+1]+= type==1?-degree:degree; 
    }
    //count 누적합
    //1. 왼->오
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            count[i][j+1]+=count[i][j];
        }
    }
     //2. 위->아래
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            count[j+1][i]+=count[j][i];
        }
    }
    let answer =0;
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            board[i][j]+=count[i][j];
            if(board[i][j]>0)answer+=1
        }
    }

    return answer

}