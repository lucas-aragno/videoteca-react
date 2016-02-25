import React, { Component, PropTypes } from 'react'
import ReactDOM  from 'react-dom'
import ImageChangeComponent from './animation/ImageChangeComponent'
import HoverComponent from './animation/HoverComponent'
import AppearComponent from './animation/AppearComponent'

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

  titleStyle() {
    if(this.state.hovered) {
      return {
        display: 'block',
        'transition': '1s'
      }
    }
    else {
      return {
        display: 'none',
        transition: '1s'
      }
    }
  }

  render() {
    const { title } = this.props
    return (
        <ImageChangeComponent
          duration={'1s'}
          childNode={::this.getNode()}
          animated={this.state.hovered}
          originalSource={this.props.poster}
          newSource={'http://vignette2.wikia.nocookie.net/yugioh/images/8/86/BlueEyesWhiteDragon-TF04-JP-VG.jpg/revision/latest?cb=20120501212944'}
        >
          <div className="movie-poster" style={this.divStyle()} onMouseOver={::this.hover} onMouseLeave={::this.leave} >
            <span className='movie-title' style={::this.titleStyle()}> { title } </span>
          </div>
        </ImageChangeComponent>
    )
  }
}
