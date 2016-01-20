import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { LOG_IN, REGISTER } from '../../actionTypes'

import logIn from '../../actions/login'

import SessionBox from '../SessionBox'

class LoginPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  getSession(params) {
    if (params.type === LOG_IN)
      this.props.dispatch(logIn(params.email, params.password))
  }

  componentDidUpdate() {
    console.warn('update')
  }

  render() {
    return (
    <SessionBox
      parentCallback={::this.getSession}
    />
    )
  }
}

export default connect((state) => ({}))(LoginPage)
