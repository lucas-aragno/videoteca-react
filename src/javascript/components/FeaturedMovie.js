import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class FeaturedMovie extends Component {

  static propTypes = {
    banner: PropTypes.string,
    title: PropTypes.string
  };

  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  divStyle() {
    const { banner } = this.props
    return {
      'backgroundImage': "url('" + banner + "')"
    }
  }

  hover() {
    this.setState({
      hovered: true
    })
  }

  leave() {
    this.setState({
      hovered: false
    })
  }

  titleStyle() {
    if(this.state.hovered) {
      return {
        display: 'block',
        'transition': '2s'
      }
    }
    else {
      return {
        display: 'none',
        transition: '2s'
      }
    }
  }

  render() {
    return (
    <div className="featured-movie" style={this.divStyle()} onMouseOver={::this.hover} onMouseLeave={::this.leave}>
      <span className='featured-title' style={::this.titleStyle()}> {this.props.title} </span>
    </div>
    )
  }
}

export default FeaturedMovie
