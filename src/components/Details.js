import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/details.scss";
import getDetailsFromServer from "../modules/getDetailsFromServer";
import darkenColor from "../modules/darkerColor";
import ProfileItem from "./ProfileItem";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
    this.handleEvolutionClick = this.handleEvolutionClick.bind(this)
  }

  componentWillMount = () => {
    this.getInicialState();
  };

  getInicialState = () => {
    const detailsFromLocal = JSON.parse(localStorage.getItem("details"));
    if (Object.keys(detailsFromLocal).length) {
      this.setState({ details: detailsFromLocal });
    } else {
      getDetailsFromServer(this.props.pokemonName).then(details =>
        this.setState({ details })
      );
    }
  };

  handleEvolutionClick = () => {
    getDetailsFromServer(this.props.pokemonName).then(details =>
      this.setState({ details })
    );
  }

  saveLocalStorage = () => {
    if (this.state.details) {
      localStorage.setItem("details", JSON.stringify(this.state.details));
    }
  };

  render() {
    this.saveLocalStorage();

    const {
      abilities,
      name,
      height,
      capture_rate,
      colors,
      egg_groups,
      evolution,
      id,
      image,
      weight,
      gender_rate,
      text,
      translated_name,
      types
    } = this.state.details;

    const getBGColor = () => {
      return colors
        ? {
            background: `linear-gradient(90deg, ${colors[0]} 50%, ${colors[1] ||
              colors[0]} 50%)`
          }
        : null;
    };

    const getTitlesColor = () => {
      return colors ? { backgroundColor: darkenColor(colors[0], -60) } : null;
    };

    const getList = (list, colors) => {
      const color = colors || "";
      const renderList = () =>
        list.map((item, index) => (
          <li key={index} style={{ backgroundColor: color[index] }}>
            {item}
          </li>
        ));
      return list ? <ul>{renderList()}</ul> : "";
    };

    const getEvolution = () => {
      const currPokemon = pokemon => {
        return pokemon.name === name ? "currentPokemon" : null;
      };

      const getEvolutionItem = (e, index) => {
        const pokemon = this.props.pokemonList.find(
          pokemon => pokemon.name === e
        );
        return pokemon ? (
          <li
            key={index}
            className={"evolution__list__item " + currPokemon(pokemon)}
            onClick={this.handleEvolutionClick}
          >
            <Link to={pokemon.name}>
              <img src={pokemon.image} alt={pokemon.name} />
            </Link>
          </li>
        ) : null;
      };

      const getEvolutionList = (especie, index) => {
        return especie ? (
          <ul key={index} className="evolution__list">
            {especie.map((e, index) => getEvolutionItem(e, index))}
          </ul>
        ) : null;
      };

      return evolution.map((especie, index) =>
        getEvolutionList(especie, index)
      );
    };

    return Object.keys(this.state.details).length ? (
      <div className="details-page" style={getBGColor()}>
        <Link to='/'><button  className="back-btn">Back</button></Link>
        <div className="details">
          <h1 className="details__name" style={getTitlesColor()}>
            {name}
          </h1>
          <div className="details__container">
            <section className="description">
              <img className="description__image" src={image} alt={name} />
              <div className="description__types">
                <ul>{getList(types, colors)}</ul>
              </div>
              <h3 className="description__id">{`# ${id}`}</h3>
              <p className="description__translated_name">{translated_name}</p>
              <p className="description__text">{text}</p>
            </section>
            <section className="profile">
              <h2 className="profile__title --title" style={getTitlesColor()}>
                Profile
              </h2>
              <ProfileItem quest={"Height: "} data={`${height}m`} />
              <ProfileItem quest={"Weight: "} data={`${weight}kg`} />
              <ProfileItem quest={"Catch Rate: "} data={`${capture_rate}%`} />
              <ProfileItem quest={"Egg Groups: "} data={getList(egg_groups)} />
              <ProfileItem quest={"Abilities: "} data={getList(abilities)} />
              <ProfileItem quest={"Gender Ratio: "} data={gender_rate} />
            </section>
            <section className="evolutions">
              <h2 className="evolutions__title --title" style={getTitlesColor()}>
                Evolutions
              </h2>
              <div className="evolution">{getEvolution()}</div>
            </section>
          </div>
        </div>
      </div>
    ) : (
      <div className="loading">
        <div className="pokemon"></div>
      </div>
    );
  }
}

export default Details;
