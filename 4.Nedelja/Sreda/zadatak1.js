// - 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

let pokemon1 = {
    ime: 'Pikachu',
    vrsta: 'Electric',
    sposobnosti: ['Static', 'Lightning Rod'],
    karakteristike: {
        napad: 55,
        odbrana: 40,
        brzina: 90
    }
};
let pokemon2 = {
    ime: 'Blastoise',
    vrsta: 'Water',
    sposobnosti: ['Torrent', 'Rain Dish'],
    karakteristike: {
        napad: 83,
        odbrana: 100,
        brzina: 78
    }
};
let pokemon3 = {
    ime: 'Arcanine',
    vrsta: 'Fire',
    sposobnosti: ['Intimidate', 'Flash Fire', 'Justified'],
    karakteristike: {
        napad: 110,
        odbrana: 80,
        brzina: 95
    }
};
let pokemon4 = {
    ime: 'Torterra',
    vrsta: 'Grass-Ground',
    sposobnosti: ['Overgrow', 'Shell armor'],
    karakteristike: {
        napad: 109,
        odbrana: 105,
        brzina: 56
    }
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];

console.log(pokemoni);
console.log('--------------------------------------');

// - 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

function abilities(pokemoni) {
    let pokemonAbilities = [];

    pokemoni.forEach(el => {
        pokemonAbilities.push(el.sposobnosti);
    })
    return pokemonAbilities.flat();
}


console.log(abilities(pokemoni));
console.log('--------------------------------------');

// - 3. Сортирати покемоне по брзини, растуће.

pokemoni.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina);

console.log(pokemoni);

console.log('--------------------------------------');

