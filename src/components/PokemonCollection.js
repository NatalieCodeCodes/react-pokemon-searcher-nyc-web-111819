import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {

    let displayedPokemons = this.props.pokemons
    displayedPokemons = displayedPokemons.filter(pokemon => pokemon.name.includes(this.props.searchInput))

    return (
      <Card.Group itemsPerRow={6}>
        {displayedPokemons.map(pokemon => <PokemonCard {...pokemon} key={pokemon.id} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
