// Sintaksa
{
    function jeDeljivaSa5(x) { // isDivisibleBy5
        // telo
        return x % 5 === 0; // Vraca Boolean (true/false)
    }

    function sum(a,b) {
        let sum = a + b;
        console.log(sum);
        return sum;
    }

// Zasto koristimo funkcije

sum(5,6);
}

console.log('------------------------------------');

// Funkcija koja vraca --- neka vrednost
// Funkcija koja ispisuje --- neka vrednost
{
    function red(n) {
        return '#'.repeat(n);
    }

    function ispisiRedove(brojRedova,jedanRed) {
        for (let i = 0; i < brojRedova; i++) {
            console.log(jedanRed);
        }
    }

    ispisiRedove(5,red(5));
}
console.log('------------------------------------');

//  Napisati funkciju koja ipisuje da li je broj deljiv sa 3
{
    function deljivSa3(x) { // printDivisibleBy3(num)
        if (x % 3 === 0) {
            console.log(`${x} je deljiv sa 3`);
        } else {
            console.log(`${x} nije deljiv sa 3`);
        }
        // --- lepsi nacin
        x % 3 === 0 ? 
            console.log(`${x} je deljiv sa 3`) 
            : 
            console.log(`${x} nije deljiv sa 3`)
}

deljivSa3(15);
}
console.log('------------------------------------');

//  Napisati funkciju koja proverava (isto sto i vraca (return)) da li je broj deljiv sa 3
{
    function isDivisibleBy3(num) {
        return num % 3 === 0
    }

    isDivisibleBy3(9);
}
console.log('------------------------------------');

// Napisati program koji izracunava zbor brojeva deljivih sa 3, od 1 do N
{
    let N = 100;
    let zbir = 0;
    for (let i = 0; i < N; i++) {
        if (isDivisibleBy3(i)) {
            zbir += i;
        }    
    }

    console.log(zbir);
}
console.log('------------------------------------');

// Ispisati sve brojeve deljiva sa 3 od 1 do N

let N = 100
for(let i = 0; i < N; i++){
    deljivSa3(i)
}
console.log('------------------------------------');

// Zadatak sa mini test-a
{
    function red(znak,N) {
        return znak.repeat(N)
    }

    function trougao(visina) {
        let trougao = '';
        for (let i = 1; i <= visina; i++) {
            trougao += ' '.repeat(50 - visina) + ' '.repeat(visina - i) + red('*',2 * i - 1) + '\n'
        }
        return trougao;
    }


    // console.log(trougao(2) + trougao(3) + trougao(4));

    let slika = '';
    for (let i = 2; i < 30; i++) {
        slika += trougao(i);
    }
    console.log(slika);
}