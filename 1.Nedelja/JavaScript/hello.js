console.log('Hello world!');

console.log(5);

// Promenljive

var x; // Deklaracija promenljive x
x = 4; // Definicija promenljive x
let y = 5; // Deklaracija i definicija promenljive y
const z = 6; // nije moguce menjati

console.log(x,y,z);

x = 54;
console.log(x,y,z);

// =  <- operator dodele
// ---------------------------------

let a = x + y;

console.log(a);

// Tipovi podataka
// Number, String, Boolean (true/false),

{
    let x = 'Hello';
    let y = 'World';
    // console.log(x - y); // NaN
}

{
    let x = 5;
    let y = '3';
    console.log(x - y); // 2
}