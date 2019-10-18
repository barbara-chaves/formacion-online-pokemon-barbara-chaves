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
    abilities,
    name,
    height,
    id,
    capture_rate,
    color,
    egg_groups,
    gender_rate,
    growth_rate,
    habitat,
    base_happiness,
    flavor_text_entries,
    weight,
    shape,
    sprites,
    types,
    genera
  } = info;
  console.log(info)
  return getEvolution(info).then(evolution => {
    return {
      abilities: abilities.map(ability => ability.ability.name),
      capture_rate: capture_rate,
      color: color.name,
      colors: getPokemonColor(types),
      egg_groups: egg_groups.map(egg => egg.name),
      evolution: evolution,
      height: height / 10,
      gender_rate: gender_rate,
      habitat: habitat.name,
      hapiness: base_happiness,
      id: id,
      image: sprites.front_default,
      image_back: sprites.back_default,
      name: name,
      shape: shape.name,
      growth_rate: growth_rate.name,
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
