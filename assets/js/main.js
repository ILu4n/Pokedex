const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function covertPokemonToLi(pokemon){
    return `
    
     <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detalhe">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"alt="${pokemon.name}">
                </div>
    
    `
}

const pokemonList = document.getElementById('pokemonList')  


    pokeApi.getpokemons().then((pokemons = []) => {
        const listItens = []

        const newLista = pokemons.map((pokemon) => {
            return convertPokemonToLi(pokemon)
        })

        const newHtml = newList.join()

        pokemonList.innerHTML += newHtml

        //const ListItens = {}

     //   for (let i = 0; i < pokemons.length; i++){
//            const pokemon = pokemons[i];
  //          listItens.push(convertPokemonToLi(pokemon))
    //    }
   //     console.log(listItens)
    })