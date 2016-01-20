import { LOG_IN, LOG_OUT, REGISTER } from '../actionTypes'

export default function session (sessionToken = '' , action) {
  switch (action.type) {
    case LOG_IN: {
      return action.payload
      }
    default: {
      return state
      }
  }
}
