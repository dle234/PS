// 8:11
function solution(survey, choices) {
    let result ="";
    var answer = '';
    
    for(let i=0;i<survey.length;i++){
        let score =0;
        let agree = survey[i][1]
        let disagree = survey[i][0]
        
        if(choices[i]==4)continue;
        if(choices[i]<4){
            result+=disagree.repeat((choices[i]-4)*(-1))
        }
        else{
            result+=agree.repeat(choices[i]-4)
        }
    }
    
    let category = ['RT','CF','JM','AN'];
    for(let i =0;i<category.length;i++){
        let first = result.split(category[i][0]).length -1;
        let second = result.split(category[i][1]).length -1;
        answer+=first>=second?category[i][0]:category[i][1];
        
    }
   

    
    return answer;
}