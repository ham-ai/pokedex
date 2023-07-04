
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.log(error))
}

/*Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon'),
    fetch('https://pokeapi.co/api/v2/pokemon'),
    fetch('https://pokeapi.co/api/v2/pokemon'),
    fetch('https://pokeapi.co/api/v2/pokemon')
]).then((results) => {
    console.log(results)
})*/