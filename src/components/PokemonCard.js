import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontImage: true
  }

  toggleImage = () => {
    this.setState({
      frontImage: !this.state.frontImage
    })
  }

  render() {

    return (
      <Card>
        <div onClick={this.toggleImage}>
          <div className="image">
            <img src={this.state.frontImage ? this.props.sprites.front : this.props.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
