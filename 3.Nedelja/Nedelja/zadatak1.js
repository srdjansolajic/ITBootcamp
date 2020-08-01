function divisibleByFive(arr) {
    let broj = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            broj += arr[i] + ' ';
        }
    }
    return broj;
}

console.log(divisibleByFive([1,2,3,4,5,10,15,23,1,5]));