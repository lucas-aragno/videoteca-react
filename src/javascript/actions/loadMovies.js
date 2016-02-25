import { LOAD_MOVIES } from '../actionTypes'
import { backendURL } from '../constants'

import axios from 'axios'

export default function loadMovies () {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_MOVIES,
      sequence: {
        type: 'start'
      }
    })

    axios
      .get('http://localhost:3000/v1/movies/index')
      .then((response) => {
        dispatch({
          type: LOAD_MOVIES,
          sequence: {
            type: 'done'
          },
          payload: {
            movies: response.data
          }
        })
      })
      .catch((response) => {
        dispatch({
          type: LOAD_MOVIES,
          sequence: {
            type: 'error'
          },
          payload: new Error()
        })
      })
  }
}
