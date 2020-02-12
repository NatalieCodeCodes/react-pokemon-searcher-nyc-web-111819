import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ""
  }

  componentDidMount () {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemonData => this.setState({
      pokemons: pokemonData
    }))
  }

  filterPokemons = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  finishSubmit = (newPokemon) => {

    let sentPokemon = 
    {
      "height": null,
      "weight": null,
      "id": null,
      "name": newPokemon.name,
      "abilities": [null],
      "moves": [],
      "stats": [
        {
          "value": null,
          "name": "special-defense"
        },
        {
          "value": null,
          "name": "special-attack"
        },
        {
          "value": null,
          "name": "defense"
        },
        {
          "value": null,
          "name": "attack"
        },
        {
          "value": null,
          "name": "speed"
        },
        {
          "value": newPokemon.hp,
          "name": "hp"
        }
      ],
      "types": [null],
      "sprites": {
        "front": newPokemon.frontUrl,
        "back": newPokemon.backUrl
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(sentPokemon)
    })
    .then(response => response.json())
    .then(pokemonData => this.setState({
      pokemons: [...this.state.pokemons, pokemonData]
    }))
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm finishSubmit={this.finishSubmit}/>
        <br />
        <Search filterPokemons={this.filterPokemons} searchInput={this.state.searchInput} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchInput={this.state.searchInput}/>
      </Container>
    )
  }
}

export default PokemonPage
