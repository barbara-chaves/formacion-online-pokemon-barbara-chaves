import {getPokemonColor} from './getDataFromServer'

const getPokemon = (path, pokemon) => {
  const ENDPOINT = `https://pokeapi.co/api/v2/${path}/${pokemon}/`;
  return fetch(ENDPOINT)
  .then(response => response.json());
}

const getPokemonsList = (pokemon) => {
  const promises = [getPokemon('pokemon', pokemon), getPokemon('pokemon-species', pokemon)];
  return Promise.all(promises)
}

const formatData = data => {
  const info = Object.assign(data[0], data[1]);
  const {name, height, id, capture_rate, egg_groups, gender_rate, abilities, flavor_text_entries, weight, sprites, types, genera} = info;
  console.log(info)
  return {
    abilities: abilities.map(ability => ability.ability.name), 
    capture_rate: capture_rate,
    colors: getPokemonColor(types),
    egg_groups: egg_groups.map(egg => egg.name), 
    height: height/10,
    gender_rate: gender_rate,
    id: id,
    image: sprites.front_default,
    name: name,
    translated_name: genera.find(item => item.language.name === 'en').genus,
    text: flavor_text_entries.find(item => item.language.name === 'en').flavor_text,
    types: types.map(type => type.type.name).sort(),
    weight: weight/10
  }
}

const getDetailsFromServer = pokemon => {
    return getPokemonsList(pokemon)
      .then(data => formatData(data))
};

export default getDetailsFromServer