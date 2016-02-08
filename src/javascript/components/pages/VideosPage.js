import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import loadMovies from '../../actions/loadMovies'

import MovieList from '../MovieList'

class VideosPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    movies: PropTypes.array
  }

  componentDidMount() {
    this.props.dispatch(loadMovies())
  }

  render() {
    const { movies } = this.props
    return (
      <MovieList movies={movies} />
    )
  }
}

function getMovies(state) {
  if(state && state.movies)
    return state.movies
  else
    return []
}

function select(state) {
  return {
    movies: getMovies(state) 
  }
}

export default connect(select)(VideosPage)
