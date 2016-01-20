import { LOG_IN, LOG_OUT, REGISTER } from '../actionTypes'

export default function session (state = '' , action) {
  switch (action.type) {
    case LOG_IN: {
      return action.payload.sessionToken
      }
    default: {
      return state
      }
  }
}
