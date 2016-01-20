import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  static propTypes = {
    router: PropTypes.object.isRequired,
    children: PropTypes.node
  }

  constructor(props) {
    super(props)
    this.state = {
      sessionToken: ''
    }
  }
  
  componentWillMount () {
    const { sessionToken } = this.state
    const { pathname } = this.props.router.location
    if (sessionToken === '' && pathname !== 'login' ) {
      window.location = '/login'
    }
  }

  componentWillReceiveProps (nextProps) {
    debugger
  }

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

function select (state) {
  debugger
  return {
    router: state.router,
    sessionToken: state.sessionToken
  }
}

export default connect(select)(App)