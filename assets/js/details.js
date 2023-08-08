const detalhesDiv = document.getElementById('cardList');
  
  function exibirDetalhesPokemon(){
    // Exibir os detalhes do Pokémon na página de detalhes
    pokeapi.getDetailsPage = async () => {
      const detalhes = document.createElement('div');
      detalhes.classList.add('detalhes');
      
      detalhes.innerHTML = `
      <div class="icons"> 
          <div class="back_page">
              <img src="/assets/img/arrow-left.svg" alt="arrow_left">
          </div>
          <div class="heart">
              <img src="/assets/img/heart.svg" alt="heart">
          </div>
      </div>
  
      <div class="title"> 
          <h1>${pokemon.name}</h1>
      </div>
  
      <div class="tags">
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
      `;
    
      detalhesDiv.appendChild(detalhes);
    }
    exibirDetalhesPokemon();
  }
  