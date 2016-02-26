import { LOAD_MOVIE } from '../actionTypes'
import { backendURL } from '../constants'

import axios from 'axios'

export default function loadMovie (id) {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_MOVIE,
      sequence: {
        type: 'start'
      }
    })

    axios
      .get(`http://localhost:3000/v1/movies/${id}`)
      .then((response) => {
        dispatch({
          type: LOAD_MOVIE,
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
          type: LOAD_MOVIE,
          sequence: {
            type: 'error'
          },
          payload: new Error()
        })
      })
  }
}
