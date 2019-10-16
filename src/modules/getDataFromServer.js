const getPokemon = (id) => {
  const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return fetch(ENDPOINT)
    .then(response => response.json());
};

const getPokemonTypes = types => types.map(type => type.type.name).sort();

const getPokemonColor = types => {
  const colors = {
    grass: '#78c850',
    water: '#6890f0',
    fire: '#f08030',
    poison: '#a040a0',
    flying: '#A890F0',
    bug: '#A8B821',
    normal: '#A8A878',
    electric: '#f8d12f',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F75888',
    rock: '#817333',
    steel: '#B8B8D0',
    ice: '#98D8D8',
    ghost:'#705797',
    dragon: '#3E1EC0'
  }
  return getPokemonTypes(types).map(type => colors[type])
}

const getPokemonsList = () => {
  const promises = [];
  for (let i = 1; i <= 151; i++){
    promises.push(getPokemon(i));
  }
  return Promise.all(promises)
    .then(data => data.forEach(pokemon => {
    const {species, sprites, types} = pokemon;
    return {
      name: species.name,
      image: sprites.front_default,
      types: getPokemonTypes(types),
      colors: getPokemonColor(types)
    }
  }))
}

export { getPokemonsList, getPokemonColor };
