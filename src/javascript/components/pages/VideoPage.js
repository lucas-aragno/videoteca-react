import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import loadMovie from '../../actions/loadMovie'

class VideoPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    movie: PropTypes.object
  }

  componentDidMount() {
    this.props.dispatch(loadMovie())
  }
  
  render() {
    const { movie } = this.props
    return (
      <div>
        hi
      </div>
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
  console.log(state)
  return {
    movies: getMovies(state),
    featuredMovie: getFeaturedMovie(state)
  }
}

export default connect(select)(VideoPage)
