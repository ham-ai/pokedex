  
  // Obtendo os dados dos Pokémon da API
  /*function obterDadosPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => exibirCartas(data))
      .catch(error => console.error(error));
  }*/
  
  // Página de detalhes do Pokémon
  function exibirDetalhesPokemon() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
  
  return  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(DetailsPokePage))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.log(error))
  }

  function DetailsPokePage(detailsPoke){
    const pokemonsDet = new PokemonDetails()
    pokemonsDet.species = PokemonDetails.species;
    pokemonsDet.height = PokemonDetails.height;
    pokemonsDet.weight = PokemonDetails.weight;
    pokemonsDet.gender = PokemonDetails.gender;
    pokemonsDet.egg = PokemonDetails.egg;
    
    const abilities = detailsPoke.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities

    pokemonsDet.abilities = abilities
    pokemonsDet.ability = ability


    return pokemonsDet

}
  
  // Exibir os detalhes do Pokémon na página de detalhes
  function exibirDetalhes(pokemon) {
    const detalhesContainer = document.getElementById('cardList');
  
    const detalhes = document.createElement('div');
    detalhes.classList.add('detalhes');
  
    detalhes.innerHTML = `
    <div class="icons"> 
        <div class="back_page">
            <img src="/assets/img/arrow-left.svg" alt="" srcset="">
        </div>
        <div class="heart">
            <img src="/assets/img/heart.svg" alt="" srcset="">
        </div>
    </div>

    <div class="title"> 
        <h1>${pokemon.name}</h1>
    </div>

    <div class="tags"> 
        <div class="type1">
            ${pokemon.type}
        </div>
        <div class="type2">
            dragon
        </div>
    </div>
    
    <div class="image_body"> 
        <img src="${pokemon.photo}" id="imgPoke" alt="${pokemon.name}" srcset="">
    </div>

    <div class="card_body">
        <div class="body_tags">
            <div class="about">About</div>
            <div class="base_stats">Base Stats</div>
            <div class="evolution">Evolution</div>
            <div class="moves">Moves</div>
        </div>
        <div class="about_tags">
            <div class="species">${pokemon.species}</div>
            <div class="height">${pokemon.height}</div>
            <div class="weight">${pokemon.weight}</div>
            <div class="abilities">${pokemon.abilities}</div>
            <span class="breeding">
                <h4 id="br1">Breeding</h4>
                <div class="gender">Gender</div>
                <div class="egg_group">Egg Groups</div>
                <div class="egg_cycle">Egg Cycle</div>
            </span>
        </div>
    </div>
</div>
    `;
  
    detalhesContainer.appendChild(detalhes);
  }
  
  // Chamando a função para obter e exibir os dados dos Pokémon
  exibirDetalhesPokemon();