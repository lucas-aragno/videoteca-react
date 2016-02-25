import { LOAD_FEATURED_MOVIE } from '../actionTypes'
import { backendURL } from '../constants'

import axios from 'axios'

export default function loadFeaturedMovie () {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_FEATURED_MOVIE,
      sequence: {
        type: 'start'
      }
    })

    axios
      .get('http://localhost:3000/v1/movies/featured_movie')
      .then((response) => {
        dispatch({
          type: LOAD_FEATURED_MOVIE,
          sequence: {
            type: 'done'
          },
          payload: {
            featuredMovie: response.data
          }
        })
      })
      .catch((response) => {
        dispatch({
          type: LOAD_FEATURED_MOVIE,
          sequence: {
            type: 'error'
          },
          payload: new Error()
        })
      })
  }
}
