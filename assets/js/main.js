
function PokemonToList(pokemon){
    return ` <li class="pokemon">
            <span class="number">#004</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG94.png" alt="${pokemon.name}">
            </div>
            
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => {
        return PokemonToList(pokemon)
    })

    const newHTML = newList.join('')
    pokemonList.innerHTML += newHTML



    const listItems = []
    for (let i = 0; i < pokemons.length; i++) {
        const poke = pokemons[i]
        listItems.push(PokemonToList(poke))
    }
    console.log(listItems)
})
        