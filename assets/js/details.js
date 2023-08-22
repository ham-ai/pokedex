const pokeDetailApi = {}
 
  // Página de detalhes do Pokémon
  function exibirDetalhesPokemon() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
    const url = `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
    
    return  fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => DetailsPokePage(jsonBody)) //Aqui precisei retornar apenas o jsonBody com a função já para construir a página de detalhes Pokemon
    .catch((error) => console.log(error))
  }


  function DetailsPokePage(detailsPoke){
    //fiz algumas alterações no código para condizer com a nova classe
    const pokemonsDet = new PokemonDetails()
    
    pokemonsDet.name = detailsPoke.name
    pokemonsDet.number = detailsPoke.id


    const types = detailsPoke.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

      pokemonsDet.types = types
      pokemonsDet.type = type

      pokemonsDet.photo = detailsPoke.sprites.front_default


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
            <div class="tab">
                <button class="tablinks" onclick="openCity(event, 'about')">About</button>
                <button class="tablinks" onclick="openCity(event, 'base')">Base Stats</button>
                <button class="tablinks" onclick="openCity(event, 'evolution')">Evolution</button>
                <button class="tablinks" onclick="openCity(event, 'moves')">Moves</button>
            </div>
        
            <div id="about" class="tabcontent">
                <ol class="ol_tg">
                    <p>Species</p><li>Teste</li>
                </ol>
                <ol class="ol_tg">
                    <p>Height</p><li>${pokemon.height}</li>
                </ol>
                <ol class="ol_tg">
                    <p>Weight</p><li>${pokemon.weight}</li>
                </ol>
                <ol class="ol_tg">
                    <p>Abilities</p>${pokemon.types.map((ability) =>`<li>${ability}</li>`).join('')}
                </ol>                    
            </div>

            <div id="base" class="tabcontent" style="display: none;">                           
                <ol class="ol_tg">
                    <p>HP</p><li>Base</li>
                </ol>
                <ol class="ol_tg">
                    <p>Attack</p><li>Base</li>
                </ol>
                <ol class="ol_tg">
                    <p>Defense</p><li>Base</li>
                </ol>
                <ol class="ol_tg">
                    <p>Sp. Atk</p><li>Base</li>
                </ol>
                <ol class="ol_tg">
                    <p>Sp. Def</p><li>Base</li>
                </ol>
                <ol class="ol_tg">
                    <p>Speed</p><li>Base</li>
                </ol>
            </div>

            <div id="evolution" class="tabcontent" style="display: none;">
                <ol class="ol_tg">
                    <p>Evolution</p><li>Evolution</li>
                </ol>
            </div>

            <div id="moves" class="tabcontent" style="display: none;">
                <ol class="ol_tg">
                    <p>Moves</p><li>Moves</li>
                </ol>
            </div>
        </div>
    </div>           
            
    `;

    detalhesContainer.appendChild(detalhes);
  }

  // Chamando a função para obter e exibir os dados dos Pokémon
exibirDetalhesPokemon()