import React, { Component, PropTypes } from 'react'
import ReactDOM  from 'react-dom'
import ImageChangeComponent from './animation/ImageChangeComponent'
import HoverComponent from './animation/HoverComponent'

import '../../stylesheets/poster.css'

export default class MoviePoster extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
      domNode: null
    }
  }


  static propTypes = {
    poster: PropTypes.string,
    movieId: PropTypes.number,
    title: PropTypes.string
  }

  divStyle() {
    return {
      'backgroundImage': "url('" + this.props.poster + "')"
    }
  }

  hover() {
    this.setState({
      hovered: true,
      domNode: ReactDOM.findDOMNode(this)
    })
  }

  leave() {
    this.setState({
      hovered: false,
      domNode: ReactDOM.findDOMNode(this)
    })
  }

  getNode() {
    return this.state.domNode
  }

  getHover() {
    return this.state.hovered
  }

  render() {
    const { title } = this.props
    return (
      <HoverComponent childNode={::this.getNode()} 
                      hovered={::this.getHover()}
                      duration={'1s'}
                      newHeight={'400px'}
                      newWidth={'400px'}
                      originalHeight={'315px'}
                      originalWidth={'315px'}
        >
        <div className="movie-poster" style={this.divStyle()} onMouseOver={::this.hover} onMouseLeave={::this.leave} >
          <span> { title } </span>
        </div>
      </HoverComponent>
    )
  }
}
