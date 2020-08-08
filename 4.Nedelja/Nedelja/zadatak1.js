// - 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

let pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'Electric',
    sposobnosti: ['Static', 'Lightning Rod'],
    karakteristike: {
        napad: 55,
        odbrana: 40,
        brzina: 90
    },
    slika: './img/pikachu.jpg'
};
let pokemon2 = {
    ime: 'Blastoise',
    vrsta: 'Water',
    sposobnosti: ['Torrent', 'Rain Dish'],
    karakteristike: {
        napad: 83,
        odbrana: 100,
        brzina: 78
    },
    slika: './img/blastoise.jpg'
};
let pokemon3 = {
    ime: 'Arcanine',
    vrsta: 'Fire',
    sposobnosti: ['Intimidate', 'Flash Fire', 'Justified'],
    karakteristike: {
        napad: 110,
        odbrana: 80,
        brzina: 95
    },
    slika: './img/arcanine.jpg'
};
let pokemon4 = {
    ime: 'Torterra',
    vrsta: 'Grass-Ground',
    sposobnosti: ['Overgrow', 'Shell armor'],
    karakteristike: {
        napad: 109,
        odbrana: 105,
        brzina: 56
    },
    slika: './img/torterra.jpg'
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

function pokemonArr(pokemoni) {
    
    pokemoni.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
    return pokemoni[0]
}
console.log(pokemonArr(pokemoni));

console.log('--------------------------------------');

// - 5. За дати html направити скрипту која:

const body = document.querySelector('body');

const divWrapper = document.createElement('div');
divWrapper.className = 'wrapper';
body.appendChild(divWrapper);

const button1 = document.createElement('button');
button1.id = 'prikaz';
button1.textContent = 'PRIKAZI POKEMONE';
divWrapper.appendChild(button1);

const button2 = document.createElement('button');
button2.id = 'pobednik';
button2.textContent = 'PRIKAZI NAJJACEG POKEMONA';
divWrapper.appendChild(button2);

button1.addEventListener('click', function pokemonAll() {

    pokemoni.forEach(el => {
        const divAll = document.createElement('div');
        body.appendChild(divAll);  
        const par = document.createElement('p');
        par.textContent = el.ime;
        divAll.appendChild(par)
        const img = document.createElement('img');
        img.src = el.slika;
        divAll.appendChild(img)
    })
})

button2.addEventListener('click', function pokemonWinner() {
    
    const div1 = document.createElement('div');
    body.appendChild(div1);
    const p = document.createElement('p');

    pokemoni.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
    p.textContent = pokemoni[0].ime;
    div1.appendChild(p);
    const img = document.createElement('img');
    img.src = pokemoni[0].slika;
    div1.appendChild(img)
})

