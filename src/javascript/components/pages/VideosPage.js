import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import loadMovies from '../../actions/loadMovies'

class VideosPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(loadMovies())
  }

  render() {
    return (
    <span>videos pelotudo</span>
    )
  }
}

export default connect((state) => ({}))(VideosPage)
