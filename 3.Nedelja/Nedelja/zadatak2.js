function lifeSupply(numPerMonth,age) {
    let pizza = 0;
    for (let i = age; i < 100; i++) {
        for (let j = 1; j <= 12; j++) {
            pizza += numPerMonth;
        }
    }   
    return pizza; 
}

lifeSupply(12,32);
console.log(lifeSupply(12,32));