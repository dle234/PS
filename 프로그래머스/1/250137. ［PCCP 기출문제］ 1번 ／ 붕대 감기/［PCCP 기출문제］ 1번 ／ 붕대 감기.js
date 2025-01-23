function solution(bandage, health, attacks) {
    let [t,x,y]= bandage;
    let totalHealth = health;
    for(let i=0;i<attacks.length;i++){
        let duration = 0;
        let [time,damage]=attacks[i];
        health-=damage;
        if(health<=0)return -1;
        if(health!=totalHealth){
            if(i==attacks.length-1)continue;
            let healTime = attacks[i+1][0]-time-1;
            while(healTime>0){
                health+= x;
                duration++;
                if(duration==t){
                    health+=y;
                    duration = 0; 
                }
                healTime-=1;
            }
            health = health>totalHealth?totalHealth:health;
        }
    }
    return health
}