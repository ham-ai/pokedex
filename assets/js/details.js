const pokeDetailApi = {}
 
  // Página de detalhes do Pokémon
  function exibirDetalhesPokemon() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    return  fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => DetailsPokePage(jsonBody)) //Aqui precisei retornar apenas o jsonBody com a função já para construir a página de detalhes Pokemon
    .catch((error) => console.log(error))
  }

  function DetailsPokePage(detailsPoke){
    //fiz algumas alterações no código para condizer com a nova classe
    const pokemonsDet = new PokemonDetails()
    pokemonsDet.name = detailsPoke.name;
    pokemonsDet.egg = detailsPoke.egg;
    pokemonsDet.species = detailsPoke.species;
    pokemonsDet.height = detailsPoke.height;
    pokemonsDet.weight = detailsPoke.weight;
    pokemonsDet.gender = detailsPoke.gender;
    pokemonsDet.number = detailsPoke.id;
    pokemonsDet.photo = detailsPoke.photo;

    const types = detailsPoke.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

      pokemonsDet.types = types
      pokemonsDet.type = type

      pokemonsDet.photo = detailsPoke.sprites.other.dream_world.front_default


    const abilities = detailsPoke.abilities.map((typeSlot) => typeSlot.ability.name)
    const [ability] = abilities

    pokemonsDet.abilities = abilities
    pokemonsDet.ability = ability


    return exibirDetalhes(pokemonsDet)

}

  // Exibir os detalhes do Pokémon na página de detalhes
  function exibirDetalhes(pokemon) {
    const detalhesContainer = document.getElementById('cardList');

    const detalhes = document.createElement('div');
    detalhes.classList.add('detalhe');

    detalhes.innerHTML = `
    <div class="card ${pokemon.type}">
        <div class="card_header"> 
                <section class="icons">
                    <div class="arrow">
                        <a href="../index.html">
                            <img src="assets/img/arrow-left.svg" alt="arrow_left">
                        </a>
                    </div>                    
                    <div class="heart">
                            <img src="assets/img/heart.svg" alt="heart">
                    </div>
                </section>                
                <section class="top_card">
                    <div class="name_number">
                        <h1>${pokemon.name}</h1>
                        <h3>#${pokemon.number}</h3>
                    </div>
                    <div class="tags">
                    ${pokemon.types.map((type) => `<h5 class="${type}">${type}</h5>`).join('')}
                    </div>
                </section>                
                <section class="poke_image">
                    <div class="photo">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </section>
        </div>
            <div class="card_body">
            </div>
    </div>           
            
    `;

    detalhesContainer.appendChild(detalhes);
  }

  // Chamando a função para obter e exibir os dados dos Pokémon
exibirDetalhesPokemon()



/*


<div class="card_body">
            </div>
        </div> 
    </section>
    ${pokemon.types.map((type) => `<div class="${type} type1">${type}</div>`).join('')} 
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
            <div class="abilities">${pokemon.abilities.map((ability)=>
                `<div>${ability}</div>`
            ).join('')}</div>
            <span class="breeding">
                <h4 id="br1">Breeding</h4>
                <div class="gender">Gender</div>
                <div class="egg_group">Egg Groups</div>
                <div class="egg_cycle">Egg Cycle</div>
            </span>
        </div>
    </div>
</div>

*/