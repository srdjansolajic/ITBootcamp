// // var x
// // let x
// // const x

// // Doseg - Scope
// // Doseg vidljivosti promenljive

// var x; // Vidi se u celom fajlu (Globalno)
// let y;

// {
//     let z = 5; // vidljjiva samo u Scope-u gde je deklarisana
//     console.log(z); // 5
//     var a = 'hallo'; // var je vidljiva globalno
// }

// console.log(z); // Not defined

// // -----------------------------------------

// var x = 5;
// x = 3; // var moze da se menja
// console.log(x); // Vidi se u scope-u u kom se nalazi

// const y = 4;
// // y = 2; // const ne moze da se menja
// console.log(y);

// let z = 7;
// z = 4; // let moze da se menja
// console.log(z); 


// console.log(5 + Number('300'));
// // Number('300') - Eksplicitno
// // 300 - Implicitno

// let k = 10;
// {
//     {
//         console.log(k); // 10
//     }
// }

// let k = 10;
// {
//     {
//         let k = 20;
//         console.log(k); // 20
//     }
// }

// var j = 10;
// {
//     console.log(j); // 10
// }

// var j = 10;
// {
//     var j = 20;
//     console.log(j); // 20
// }

// let x = 10;
// {
//     {
//         x = 20;
//         console.log(x); // 20
//     }
// }

// let x = 4;
// var y = 6;
// const z = 2;

// {
//     {
//         x = 18;
//     }
//     console.log(x,y,z); // 18 6 2 let je ve
// }

// {
//     {
//        let x = 18;
//     }
//     console.log(x,y,z); // 4 6 2 let ne vidi blokove koji su kreirani nakon log-a
// }

// Number('3.14') = 3.14
// Number(' ') = 0
// Number('') = 0
// Number('99 88') = NaN

// Number(false) = 0
// Number(true) = 1

// '5' + 2 = 52 kao string jer 2 konvertuje u '2'
// '5' - 2 = 3 jer 5 konvertuje u broj 5
// '5' * '2' = 10 jer se oba stringa konvertuju kao broj

/* prilikom pisanja indetifikatora moramo postovati odredjena pravila:
1: mogu sadrzati slova, brojeve, donju crtu(_)
2: ne mogu poceti sa brojem
3: su case-sensitive
4: mogu biti bilo koje duzine
5: ne mogu biti isti kao JavaScript kljucne reci */
//--------------------------------

// var ime = "global";

// function proveriScope() {
//     var ime = "local";
//     console.log(ime);
// }

// proveriScope(); // local
// console.log(ime); // global
//-----------------------------------

// var ime = "global";

// function proveriScope() {
//     ime = "local";
//     console.log(ime);
// }

// proveriScope(); // local
// console.log(ime); // local
// ------------------------------

// var ime = "global";

// {
//     let ime = "local";
//     console.log(ime);
// }

// // proveriScope(); // local
// console.log(ime); // global

// var car = "Volvo";
// let cat = "Zaklina";

// function info() {
//     cat = "Skoljkica";
//     console.log(cat);
// }

// info();
// console.log(cat);