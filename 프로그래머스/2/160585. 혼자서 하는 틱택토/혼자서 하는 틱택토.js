function win(board, winner){
    // 가로
     for(let i=0;i<board.length;i++){
      if(board[i].every(e=>e==winner)){     
            return true;
        }
    }
    //세로
    for(let i=0;i<board.length;i++){
       if (board[0][i] === winner && 
            board[1][i] === winner && 
            board[2][i] === winner) {
            return true;
        }
    }
    //대각선
   
     if (board[0][0] === winner && 
        board[1][1] === winner && 
        board[2][2] === winner) {
        return true;
    }
    
    if (board[0][2] === winner && 
        board[1][1] === winner && 
        board[2][0] === winner) {
        return true;
    }
    return false;
    
}

function solution(board) {
    let xCount =0;
    let oCount =0;
     board.map(b=>{
        oCount+= b.split("O").length-1;
        xCount+= b.split("X").length-1;
    })
    // O 먼저 시작,
    // O 가 이긴 체 끝난다면 O 의 개수가 하나 더 많음.
    // O 와 X 둘 다 이길 순 없음.
    // X 가 이긴다면, X의 개수 == O 의 개수여야 함.
    
    board = board.map(b => b.split(''));
    const winnerO = win(board,'O');
    const winnerX = win(board,'X');
    if(xCount>oCount)return 0;
    if(oCount>xCount+1)return 0;
    if(winnerO&&winnerX)return 0;
    if(winnerO){
        if(oCount!=xCount+1)return 0;
    }
    if(winnerX){
        if(oCount!=xCount)return 0;
    }
    // 게임이 끝났는데(9개 모두 표시) O의 갯수 - X의 갯수 = 1이 아니다
    

// O, X 모두가 3개 줄이 만들어져 있다(즉, 3개 줄이 각각 하나씩 있다 - 한꺼번에 줄 2개가 동시에 생기는 경우 - 가운데로 끝내는 경우 - 가 있으므로 카운트 2로는 부족)

    

// x 가 더 많을 경우
// o 가 1개 이상 더 많을 경우
// 둘 다 이긴 경우
// o 가 이겼지만 o 가 1개 더 많지 않을 경우
// x 가 이기고 o 와 x 개수가 같지 않을 경우

    return 1;
}

//규칙을 지켰는지 확인하는 함수 구하기
// 규칙을 지키지 못했다고 생각할 수 있는 근거
// 1. X 와 O 의 갯수가 다름
// 2. 한명이 이겼는데 계속 이어갈 경우 -> 3 X 3 O 두줄 나올 경우



   
    
