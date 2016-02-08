import { LOAD_FEATURED_MOVIE } from '../actionTypes'

export default function featuredMovie (state = {} , action) {
  switch (action.type) {
    case LOAD_FEATURED_MOVIE: {
      switch (action.sequence.type) {
        case 'start':
          return null
        case 'done':
          return action.payload.featuredMovie
        default:
          return state
      }
      }
    default: {
      return state
      }
  }
}
