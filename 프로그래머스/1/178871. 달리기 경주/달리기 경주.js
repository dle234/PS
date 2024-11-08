function solution(players, callings) {
    var answer = [...players];
   var object ={}
   players.forEach((player, index) => {
   object[player] = index;
});
    for(let i = 0; i < callings.length ; i++){
        let key = object[callings[i]]
        const value = answer[key]
        const value2= answer[key-1]
        answer[key-1] = value
        answer[key]= value2
        object[value2] = key
        object[value] = key-1
        // const key = Object.keys(object).find(key => object[key] === callings[i]);
        // var current = object[key]
        // var two = object[key-1]
        // answer[key-1]=current
        // object[key]=two

        
//         for (let value of map) {
//             if(value == callings[i]){
             
//                 var current = answer[j]
//                 var two = answer[j-1]
//                 answer[j-1]=current
//                 answer[j]=two
//                 break
//             }
    // }
    

//     for(let i = 0; i < callings.length ; i++){
//         const a = map.get(callings[i])
//                  var current = answer[j]
//                 var two = answer[j-1]
//                 answer[j-1]=current
//                 answer[j]=two
        
        // while(j<answer.length){
        //     if(answer[j] == callings[i]){
        //         var current = answer[j]
        //         var two = answer[j-1]
        //         answer[j-1]=current
        //         answer[j]=two
        //         break
        //     }
        //     j++
        // }

    }
    
    return answer;
}