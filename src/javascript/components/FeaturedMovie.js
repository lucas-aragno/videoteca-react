import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class FeaturedMovie extends Component {

  static propTypes = {
    banner: PropTypes.string.isRequired
  };

  divStyle() {
    const { banner } = this.props
    return {
      'backgroundImage': "url('" + banner + "')"
    }
  }
  render() {
    return (
    <div className="featured-movie" style={this.divStyle()}>
    </div>
    )
  }
}

export default FeaturedMovie
