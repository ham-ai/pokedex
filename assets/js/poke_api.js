const pokeApi = {}

function pokeListDetail(pokeListDetail){
    const pokemon = new Pokemon()

    pokemon.number = pokeListDetail.id
    pokemon.name = pokeListDetail.name
    
    const types = pokeListDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeListDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(pokeListDetail)
}


pokeApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.log(error))
}

/**
 * 
 *  
 * 
 * 
 * 
 */

// Detalhes Pokemon Página
    pokeApi.getDetailsPage = async () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

   return fetch(url)
   .then(response => response.json())
   .then((jsonBody) => DetailPage(jsonBody))
   .catch((error) => console.log(error))
}

pokeApi.getDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(DetailPage)
}

function DetailPage(detailsPoke){
    const detalhes = new Pokemon()
    
    pokemon.name = detailsPoke.name;
    pokemon.number = detailsPoke.id

    const types = detailsPoke.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = detailsPoke.sprites.other.dream_world.front_default

    pokemon.species = detailsPoke.species;
    pokemon.height = detailsPoke.height;
    pokemon.weight = detailsPoke.weight;
    pokemon.gender = detailsPoke.gender;
    pokemon.egg = detailsPoke.egg;
    
    const abilities = detailsPoke.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities
    
    pokemon.abilities = abilities
    pokemon.ability = ability
    
    return detalhes
}
