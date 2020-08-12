export function pokemonArr(pokemoni) {
    
    pokemoni.sort((a, b) => b.karakteristike.napad - a.karakteristike.napad)
    return pokemoni[0]
}