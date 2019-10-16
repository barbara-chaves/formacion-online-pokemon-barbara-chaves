import React from "react";
import "../stylesheets/details.scss";
import getDetailsFromServer from "../modules/getDetailsFromServer";
import Profile from "./Profile";

function darkenColor(col, amt) {
  var usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

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
    const detailsFromLocal = JSON.parse(localStorage.getItem("details"));
    if (Object.keys(detailsFromLocal).length) {
      this.setState({ details: detailsFromLocal });
    } else {
      getDetailsFromServer(this.props.pokemonName).then(details =>
        this.setState({ details })
      );
    }
  };

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

    return Object.keys(this.state.details).length ? (
      <div className="details-page" style={getBGColor()}>
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
              <h2 className="profile__title" style={getTitlesColor()}>
                Profile
              </h2>
              <Profile quest={"Heigth: "} data={`${height}m`} />
              <Profile quest={"Weight: "} data={`${weight}kg`} />
              <Profile quest={"Catch Rate: "} data={`${capture_rate}%`} />
              <Profile quest={"Egg Groups: "} data={getList(egg_groups)} />
              <Profile quest={"Abilities: "} data={getList(abilities)} />
              <Profile quest={"Gender Ratio: "} data={gender_rate} />
            </section>
          </div>
        </div>
      </div>
    ) : (
      <div className="loading">
        <div className='pokemon'></div>
      </div>
    );
  }
}

export default Details;
