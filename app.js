console.log('Hello World');

// PokeDex

const pokeContainer = document.querySelector('#container')
// Number of Pokemon using the first 150 pokemon in the PokeAPI

const numbOfPokemon = 151
// The createPokecard function creates a new card
function createPokeCard(pokemon) {
    const pokeCard = document.createElement('section')
    pokeCard.classList.add('pokemon')
    pokeContainer.append(pokeCard)
    // Setting the innerHTML for the new card using the data/object that is passed into the pokemon parameter. Also, using the toUpperCase method on the pokemon name for it will be uppercase
    pokeCard.innerHTML = `
    <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}" alt="${pokemon.data.name}">
    </div>
    <h3 class = "name">${pokemon.data.name.toUpperCase()}</h3>
    ` 
}

// The getPokemonData function makes an axios GET request to the PokeAPI using a specific pokemon ID/number then takes the returned data and passes it into the createpokeCard function 
// NOTE: the argument/value into the ID parameter will be a number created in the loop in the next function 

async function getPokemonData (id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemonData = await axios.get(url)
    console.log(pokemonData);
    console.log(pokemonData.data.sprites.front_shiny);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData)
}

// 
// 
async function getPokemon(i) {
    for(i=1; i < numbOfPokemon; i++){
        await getPokemonData(i)
    }
}
getPokemon()