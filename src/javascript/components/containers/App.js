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
  
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

function select (state) {
  return {
    router: state.router,
    sessionToken: state.sessionToken
  }
}

export default connect(select)(App)