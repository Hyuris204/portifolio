const pokemonName = document.querySelector(".pokemon_name");

const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector("img");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


    if (APIResponse.status === 200) {

        const data = await APIResponse.json();

        return data;

    }

    pokemonName.textContent = "sabe ler não?!"



};



// RENDERIZAR O DADOS DA API

    const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    if (data){
        pokemonNumber.innerHTML = data.id;
        pokemonName.textContent = data.name;
        pokemonImage.src = data[`sprites`][`versions`][`generation-v`][`black-white`][`animated`][`front_default`];
        input.value = "";    
    
        console.log(data);
            
    } else {

        pokemonName.textContent = "Sabe ler não?!"
        
    }

};


form.addEventListener("submit", (event) => {
   
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());

    

});


