import React, { Component, PropTypes } from 'react'



export default class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string,
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
      <div className="poster-margin">
        <div className="poster poster-skyfall">
          <div className="poster-skyfall-lyr3"></div>
          <div className="poster-skyfall-lyr2"></div>
          <div className="poster-skyfall-lyr1"></div>
          <div className="bg poster-skyfall-bg">
            <div className="poster-skyfall-lyr5"></div>
            <div className="glow"></div>
          </div>
          <div className="bg poster-skyfall-bg bg-2">
            <div className="poster-skyfall-lyr4"></div>
          </div>
          <div className="shadow"></div>
        </div>
        <div className="poster-title">Skyfall</div>
    </div>
    )
  }
}
