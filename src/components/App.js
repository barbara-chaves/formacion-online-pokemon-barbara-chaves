import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import { getPokemonsList } from "../modules/getDataFromServer";
import List from "./List";
import Details from "./Details";
import Footer from './Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      selectedPokemon: "",
      filter: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount = () => {
    this.getInicialState();
  };

  getInicialState = () => {
    getPokemonsList().then(pokemons => this.setState({ pokemons }));
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

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={this.renderList} />
          <Route path={"/:name"} render={this.renderDetails} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
