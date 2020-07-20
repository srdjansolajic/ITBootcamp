let cena = 450;
let stek = 470;

if (stek <= 450) {
    console.log('Nemate dovoljno novca');
    console.log('Trenutno stanje je', stek);
} else {
    console.log('Uspesno ste kupilil proizvod');
    console.log('Trenutno stanje je', stek - cena);
}

