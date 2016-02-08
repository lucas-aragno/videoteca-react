import React, { Component, PropTypes } from 'react'

import MoviePoster from './MoviePoster'
import '../../stylesheets/list.css'

export default class MovieList extends Component {

  render() {
    return (
    <ul className='items'>
      <li className='list-item'>
        <MoviePoster poster={"http://cdn7.nflximg.net/images/5297/20935297.jpg"} alt={"Daredevil"} title={"Daredevil"} />
      </li>
    </ul>
    )
  }
}
