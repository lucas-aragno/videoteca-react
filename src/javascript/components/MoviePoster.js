import React, { Component, PropTypes } from 'react'

import '../../stylesheets/poster.css'

export default class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string,
    movieId: PropTypes.number,
    title: PropTypes.string
  }

  divStyle() {
    return {
      'backgroundImage': "url('" + this.props.poster + "')"
    }
  }

  render() {
    const { title } = this.props
    return (
      <div className="movie-poster" style={this.divStyle()}>
        <span> { title } </span>
      </div>
    )
  }
}
