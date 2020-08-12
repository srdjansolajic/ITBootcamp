// - 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

import { pokemon1, pokemon2, pokemon3, pokemon4} from './pokemoni.js';

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

import { pokemonArr } from './najjaci.js'

console.log(pokemonArr(pokemoni));

console.log('--------------------------------------');

// - 5. За дати html направити скрипту која:

import { body, divWrapper, button1, button2 } from './elementToDOM.js'


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

