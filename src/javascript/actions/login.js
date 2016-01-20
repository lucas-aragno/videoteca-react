import { LOG_IN } from '../actionTypes'

export default function logIn (email, password) {
  console.log('called')
  return {
    type: LOG_IN,
    payload: {
      sessionToken: 'abcdefg'
    }
  }
}
