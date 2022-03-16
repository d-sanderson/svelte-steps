
const fetchKantoPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    console.log('hit')
    const pokemons = await data.json()
    console.log({res: pokemons.results})
    return pokemons.results
}

export async function get() {
  return {
    body: {
        pokemons: await fetchKantoPokemon()
    },
  };
}