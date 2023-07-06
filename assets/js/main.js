const pokemonList = document.getElementById('pokemonList');
const loadmoreButton = document.getElementById('loadmore_btn')
const limit = 9;
let offset = 0;
maxRecord = 151;

function loadPokemonItens(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => ` 
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
            alt="${pokemon.name}">
        </div>
        
        </li>
            `).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)
        
loadmoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadmoreButton.parentElement.removeChild(loadmoreButton)
    }
    else{
        loadPokemonItens(offset, limit)
    }
    
})

