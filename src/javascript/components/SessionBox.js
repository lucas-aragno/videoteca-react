import React, { Component, PropTypes } from 'react'
import '../../stylesheets/session.css'

import Captcha from './Captcha'

import { LOG_IN, REGISTER } from '../actionTypes'

class SessionBox extends Component {

  static propTypes = {
    parentCallback: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  header() {
    const { isLogin } = this.state
    const title = isLogin ? 'Ingresar' : 'Registrate'
    return (
    <h1>{title}</h1>
    )
  }

  switchState() {
    const { isLogin } = this.state
    this.setState({
      isLogin: !isLogin
    })
  }

  switchSpan() {
    const { isLogin } = this.state
    const question = isLogin ? '¿No eres miembro? ' : '¿Ya tienes una cuenta? '
    const option = isLogin ? 'Registrate' : 'Ingresa'

    return (
    <span>{question} <a onClick={::this.switchState}>{option}</a></span>
    )
  }

  renderCaptcha() {
    const { isLogin } = this.state
    return isLogin ? '' : (<Captcha />)
  }

  buttonLabel() {
    const { isLogin } = this.state
    return isLogin ? 'Ingresar' : 'Registrate'
  }

  performAction() {
    const { isLogin } = this.state
    const action = isLogin ? LOG_IN : REGISTER
    const { email, password } = this.refs
    let params = {
      type: action,
      email: email.value,
      password: password.value
    }

    this.props.parentCallback(params)
  }

  render() {
    return (
    <div className="box">
      {this.header()}
      <input ref='email' type="text" placeholder="Email" />
      <input ref='password' type="password" placeholder="Contraseña" />
      { this.renderCaptcha() }
      <button onClick={::this.performAction}>
        { this.buttonLabel() }
      </button>
      <p>
        {this.switchSpan()}
      </p>
    </div>
    )
  }
}

export default SessionBox
