import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Youtube from 'react-youtube'

import loadMovie from '../../actions/loadMovie'

class VideoPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    movies: PropTypes.object
  }

  componentDidMount() {
    const id = window.location.pathname.match(/\d+/)[0]
    this.props.dispatch(loadMovie(id))
  }

  getOpts() {
    const { width, height } = window.getComputedStyle(document.querySelector('body'))
    return {
      height: parseInt(height),
      width: parseInt(1280)
    }
  }

  render() {
    const { movies } = this.props
    const movieId = movies.link.split('v=')[1]
    return (
      <Youtube
        videoId={movieId}
        opts={::this.getOpts()}
      />
    )
  }
}

function getMovies(state) {
  if(state && state.movies)
    return state.movies
  else
    return []
}

function getFeaturedMovie(state) {
  if (state && state.featuredMovie)
    return state.featuredMovie
  else
    return {}
}

function select(state) {
  return {
    movies: getMovies(state),
    featuredMovie: getFeaturedMovie(state)
  }
}

export default connect(select)(VideoPage)
