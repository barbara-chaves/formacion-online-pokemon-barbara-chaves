import { getPokemonColor } from "./getDataFromServer";

const getPokemon = (path, pokemon) => {
  const ENDPOINT = `https://pokeapi.co/api/v2/${path}/${pokemon}/`;
  return fetch(ENDPOINT).then(response => response.json());
};

const getPokemonsList = pokemon => {
  const promises = [
    getPokemon("pokemon", pokemon),
    getPokemon("pokemon-species", pokemon)
  ];
  return Promise.all(promises);
};

const getData = data => data.find(item => item.language.name === "en");

const getEvolution = info => {
  return fetch(info.evolution_chain.url)
    .then(response => response.json())
    .then(evolution => {
      const first = [evolution.chain.species.name];
      const second = evolution.chain.evolves_to.map(
        specie => specie.species.name
      );
      const getThird = () => 
      evolution.chain &&
      evolution.chain.evolves_to[0] && evolution.chain.evolves_to[0].evolves_to[0] ? [evolution.chain.evolves_to[0].evolves_to[0].species.name] : null;
      return [first, second, getThird()];
    });
};

const formatData = data => {
  const info = Object.assign(data[0], data[1]);
  const {
    name,
    height,
    id,
    capture_rate,
    egg_groups,
    gender_rate,
    abilities,
    flavor_text_entries,
    weight,
    sprites,
    types,
    genera
  } = info;

  return getEvolution(info).then(evolution => {
    return {
      abilities: abilities.map(ability => ability.ability.name),
      capture_rate: capture_rate,
      colors: getPokemonColor(types),
      egg_groups: egg_groups.map(egg => egg.name),
      evolution: evolution,
      height: height / 10,
      gender_rate: gender_rate,
      id: id,
      image: sprites.front_default,
      name: name,
      translated_name: getData(genera).genus,
      text: getData(flavor_text_entries).flavor_text,
      types: types.map(type => type.type.name).sort(),
      weight: weight / 10
    };
  });
};

const getDetailsFromServer = pokemon => {
  return getPokemonsList(pokemon).then(data => formatData(data));
};

// {pokemon.evolves_to = evolution.chain.species.name})
export default getDetailsFromServer;
