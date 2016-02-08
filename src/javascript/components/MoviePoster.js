import React, { Component, PropTypes } from 'react'

import '../../stylesheets/poster.css'

export default class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string
  }

  divStyle() {
    return {
      'backgroundImage': "url('" + this.props.poster + "')"
    }
  }

  render() {
    return (
    <div>
      <div className="poster-image"
        style={this.divStyle()}>
      </div>
      <a href="#">
        <div className="content">
          <h2>{ this.props.title } </h2>
        </div>
      </a>
    </div>
    )
  }
}
