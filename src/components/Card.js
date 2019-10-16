import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/card.scss";

const Card = props => {
  const { name, image, colors } = props.pokemon;
  const handleClick = () => props.getPokemonName(name);
  const style = {
    background: `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1] ||
      colors[0]} 50%)`
  };
  return (
    <div className="pokemon" style={style} onClick={handleClick}>
      <Link to={"/" + name}>
        <div
          className="pokemon__image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <p className="pokemon__name">{name}</p>
      </Link>
    </div>
  );
};

export default Card;
