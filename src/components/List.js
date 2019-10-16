import React from "react";
import Card from "./Card";
import "../stylesheets/list.scss";
import Header from "./Header";
import Filter from "./Filter";

const renderCardList = props => {
  return props.pokemons.map((pokemon, index) => {
    return (
      <li className="list__item" key={index}>
        <Card pokemon={pokemon} getPokemonName={props.getPokemonName} />
      </li>
    );
  });
};

const List = props => {
  return (
    <div className="list-page">
      <Header />
      <Filter inputValue={props.inputValue} onInputChange={props.onInputChange}/>
      <ul className="list">{renderCardList(props)}</ul>
    </div>
  );
};

export default List;
