import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import loadMovies from '../../actions/loadMovies'
import loadFeaturedMovie from '../../actions/loadFeaturedMovie'

import MovieList from '../MovieList'
import FeaturedMovie from '../FeaturedMovie'

class VideosPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    movies: PropTypes.array,
    featuredMovie: PropTypes.object
  }

  componentDidMount() {
    this.props.dispatch(loadMovies())
    this.props.dispatch(loadFeaturedMovie())
  }
  
  render() {
    const { movies, featuredMovie, router } = this.props
    return (
      <div>
        <FeaturedMovie banner={featuredMovie.image_url} title={featuredMovie.title} movieId={featuredMovie.id} router={router}/>
        <MovieList movies={movies} router={router}/>
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
  return {
    movies: getMovies(state),
    featuredMovie: getFeaturedMovie(state)
  }
}

export default connect(select)(VideosPage)
