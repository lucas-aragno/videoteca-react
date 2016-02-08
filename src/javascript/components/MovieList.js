import React, { Component, PropTypes } from 'react'

import MoviePoster from './MoviePoster'


export default class MovieList extends Component {
  static proptTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props
    return (
      <div className='container'>
        { movies.map((movie) => {
            <MoviePoster />
          })
        }
      </div>
    )
  }
}
