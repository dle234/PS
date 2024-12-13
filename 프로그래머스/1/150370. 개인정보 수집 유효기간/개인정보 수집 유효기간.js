function getNumber(number){
    let num = number
     if(num[0]==0){
         num= num.substring(1);
     }
    return Number(num)
}

function checkExpired(today, term){
    let [todayY,todayM,todayD]=today.split(".");
    let [y,m,d]= term;
    
    todayM = getNumber(todayM);
    d = getNumber(d)-1;
    todayD = getNumber(todayD);
   
    if(todayY>y)return true;
    if(todayY<y)return false;
    
    if(todayM>m)return true;
    if(todayM<m)return false;
    
    if(todayD>d)return true;
    if(todayD<d)return false;
    return false;
    
}

function solution(today, terms, privacies) {
    let answer =[];
   privacies.forEach((privacy,index)=>{
        let [date,char] = privacy.split(" ");
        let [y,m,d] = date.split(".").map(Number);
        
        terms.forEach((term)=>{
            if(term.includes(char)){
                let period = term.substring(1);
                
                m=getNumber(m)+Number(period);
               
                if(m>12) {
                    let a = parseInt(m/12);
                    if(m%12==0)a--
                    m-=a*12;
                    y+=a
                               }
            }
        })
       let a = checkExpired(today,[y,m,d]);
       
     
       if(a)answer.push(index+1)
       
    })
  return answer;
}

// 개인정보 n개의 약관(개인정보 보관 유효기간)을 보고싶음.
// 오늘 파기해야 할 개인정보 번호를 구하려고 함.
// 모든 달은 28로 가정

// privacies 를 " " 로 나누고, [1]번째 애를 terms 를 돌며 해당 문자열이 그 문자를 포함하고 있따면 그 다음 숫자만큼 달에 더해준다. 그리고 , 그 달이 28 이상이면 년도를 +1 해주고, 달을 -28을 해준다. 

// today 를 넘었는지 확인한다.

// !! 24개월일 경우, 즉 12월이 남아있어야 하는데, 