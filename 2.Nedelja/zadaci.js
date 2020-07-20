// Napisati program koji za unete parametre
// Racuna i ispise obim i povrsinu sledecih figura:
// Krug, Pravougaonik, Kvadrat

{
    let r = 12;
    let O, P;
    O = 2 * r * Math.PI;
    P = r * r * Math.PI;
    console.log(O, P);
}

// ---

{
    let r = -10;
    if(r >= 0) {
        let O, P;
        O = 2 * r * Math.PI;
        P = r * r * Math.PI;
        console.log(O, P);
    }
}

// ---
// {
//     let x = 10;

//     if (x < 10) {
//         console.log('Prvi slcaj');
//     }
       
// }

// {
//     let danUnedelji = 1;

//     switch (danUnedelji) {
//         case 1:
//             console.log('Ponedeljak');
//             break;
//         case 2:
//             console.log('Utorak');
//             break;   
//         default:
//             console.log('Nije ponedeljak ni utorak');
//     }
// }

// Na onsovu dana u nedelji (zadatak broji) ispisati da li je vikend ili radni dan
// 0 - 6 ili 1 - 7
// Sa switch i sa if/else strukturom

let danUnedelji = 3;

switch (danUnedelji) {
    case 1:
        console.log('Radni dan');
        break;
    case 2:
        console.log('Radni dan');
        break;
    case 3:
        console.log('Radni dan');
        break;
    case 4:
        console.log('Radni dan');
        break;
    case 5:
        console.log('Radni dan');
        break;
    case 6:
        console.log('Vikend');
        break;
    case 7:
        console.log('Vikend');
    default:
        console.log('Nije dobar unos');
        break;
}

// ---

let daniUnedelji = 6;

if (daniUnedelji == 1) {
    console.log('Radni dan');
} else if (daniUnedelji == 2) {
    console.log('Radni dan');
} else if (daniUnedelji == 3) {
    console.log('Radni dan');
} else if (daniUnedelji == 4) {
    console.log('Radni dan');
} else if (daniUnedelji == 5) {
    console.log('Radni dan');
} else if (daniUnedelji == 6) {
    console.log('Vikend');
} else if (daniUnedelji == 7) {
    console.log('Vikend');
} 

//  ---------------------------- ovako je lakse i manje koda 

let dan = 4;

if (dan >= 1 && dan <= 7) {
    if (dan == 6 || dan == 7) {
        console.log('Vikend');
    } else {
        console.log('Radni dan');
    }
}
else {
    console.log('Nije validan unos');
}

// На основу месеца исписати колико он има дана
// 0 - 11

let mesec = 3;

switch (mesec) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('Mesec ima 31 dan');        
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('Mesec ima 30 dana');
        break;
    case 2:
        console.log('Mesec ima 28 dana');
        break;
    default:
        console.log('Pogresan unos');
        break;
}