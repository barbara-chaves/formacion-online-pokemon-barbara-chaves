import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import { getPokemonsList } from "../modules/getDataFromServer";
import List from "./List";
import Details from "./Details";
import getDetailsFromServer from "../modules/getDetailsFromServer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      selectedPokemon: "",
      filter: ""
    };

    this.getPokemonName = this.getPokemonName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount = () => {
    this.getInicialState();
  };

  getInicialState = () => {
    // const pokemonsFromLocal = JSON.parse(localStorage.getItem("pokemons"));
    // if (pokemonsFromLocal) {
    //   this.setState({ pokemons: pokemonsFromLocal });
    // } else {
      getPokemonsList().then(pokemons => this.setState({ pokemons }));
    // }
  };

  getPokemonName = selectedPokemon => {
    this.setState({ selectedPokemon });
    getDetailsFromServer(selectedPokemon).then(detale =>
      this.setState({ detale })
    );
  };

  handleInputChange = event => {
    const filter = event.target.value;
    this.setState({ filter });
  };

  renderList = () => {
    const filter = this.state.filter.toLowerCase();
    const filteredPokemons = this.state.pokemons.filter(
      pokemon =>
        pokemon.name.includes(filter) ||
        pokemon.types.toString().includes(filter)
    );

    return (
      <List
        pokemons={filteredPokemons}
        getPokemonName={this.getPokemonName}
        onInputChange={this.handleInputChange}
        inputValue={this.state.filter}
      />
    );
  };

  renderDetails = renderProps => {
    return <Details pokemonName={renderProps.match.params.name} pokemonList={this.state.pokemons}/>;
  };

  saveLocalStorage = () => {
    if (this.state.pokemons) {
      localStorage.setItem("pokemons", JSON.stringify(this.state.pokemons));
    }
  };

  render() {
    // this.saveLocalStorage();
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={this.renderList} />
          <Route path={"/:name"} render={this.renderDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
