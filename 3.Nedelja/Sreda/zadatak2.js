function pizzaPrice(r,cena) {
    let P = Math.PI * Math.pow(r, 2);
    return cena / P;
}

console.log(pizzaPrice(25,750));