import { LOAD_MOVIES, LOAD_MOVIE, LOAD_FEATURED_MOVIE } from '../actionTypes'

export default function movies (state = [] , action) {
  switch (action.type) {
    case LOAD_MOVIES: {
      switch (action.sequence.type) {
        case 'start':
          return null
        case 'done':
          return action.payload.movies
        default:
          return state
      }
      }
    case LOAD_MOVIE: {
      return action.payload.movie
      }
    default: {
      return state
      }
  }
}
