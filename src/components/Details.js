import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/details.scss";
import getDetailsFromServer from "../modules/getDetailsFromServer";
import darkenColor from "../modules/darkerColor";
import ProfileItem from "./ProfileItem";
import Buttons from "./Buttons";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }

  componentDidMount = () => {
    this.getInicialState();
  };

  getInicialState = () => {
    getDetailsFromServer(this.props.pokemonName).then(details =>
      this.setState({ details })
    );
  };

  componentDidUpdate = () => {
    if (this.props.pokemonName !== this.state.details.name) {
      getDetailsFromServer(this.props.pokemonName).then(details =>
        this.setState({ details })
      );
    }
  };

  render() {

    const {
      abilities,
      capture_rate,
      color,
      colors,
      egg_groups,
      evolution,
      gender_rate,
      growth_rate,
      habitat,
      height,
      hapiness,
      id,
      image,
      image_back,
      name,
      shape,
      text,
      translated_name,
      types,
      weight
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
        return pokemon.name === name ? "currentPokemon" : '';
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

    const getPrevPokemon = id => {
      return id > 1
        ? this.props.pokemonList.filter(pok => pok.id === id - 1)[0].name
        : "";
    };

    const getNextPokemon = id => {
      return id < 151
        ? this.props.pokemonList.filter(pok => pok.id === id + 1)[0].name
        : "";
    };

    return Object.keys(this.state.details).length ? (
      <div className="details-page" style={getBGColor()}>
        <Buttons prev={getPrevPokemon(id)} next={getNextPokemon(id)} />
        <div className="details">
          <h1 className="details__name" style={getTitlesColor()}>
            {name}
          </h1>
          <div className="details__container">
            <section className="description">
              <img className="description__image" src={image} alt={name} />
              <img className="description__image_back" src={image_back} alt={name} />
              <div className="description__types">
                {getList(types, colors)}
              </div>
              <h3 className="description__id">{`# ${id}`}</h3>
              <p className="description__translated_name">{translated_name}</p>
              <p className="description__text">{text}</p>
            </section>
            <section className="profile">
              <h2 className="profile__title --title" style={getTitlesColor()}>
                Profile
              </h2>
              <div className='profile__wrap'>
              <ProfileItem quest={"Height: "} data={`${height}m`} />
              <ProfileItem quest={"Weight: "} data={`${weight}kg`} />
              <ProfileItem quest={"Catch Rate: "} data={`${capture_rate}%`} />
              <ProfileItem quest={"Hapiness: "} data={`${hapiness}%`} />
              <ProfileItem quest={"Habitat: "} data={habitat} />
              <ProfileItem quest={"Growth Rate: "} data={growth_rate} />
              <ProfileItem quest={"Color: "} data={color} />
              <ProfileItem quest={"Shape: "} data={shape} />
              <ProfileItem quest={"Abilities: "} data={getList(abilities)} />
              <ProfileItem quest={"Egg Groups: "} data={getList(egg_groups)} />
              </div>
            </section>
            <section className="evolutions">
              <h2
                className="evolutions__title --title"
                style={getTitlesColor()}
              >
                Evolution Chain
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
