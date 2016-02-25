import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class HoverComponent extends Component {

  static propTypes = {
    childNode: PropTypes.object,
    hovered: PropTypes.bool,
    originalWidth: PropTypes.string,
    originalHeight: PropTypes.string,
    newWidth: PropTypes.string,
    newHeight: PropTypes.string,
    duration: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    const { childNode, hovered, newHeight, newWidth, duration, originalHeight, originalWidth } = nextProps
    requestAnimationFrame(() => {
      if (childNode && hovered) {
        childNode.style.width = newWidth
        childNode.style.height = newHeight
        childNode.style.transition = duration
      }
      else if(!hovered && childNode){
        childNode.style.width = originalWidth
        childNode.style.height = originalHeight
        childNode.style.transition = duration
      }
    })
  }

  render() {
    return (
    this.props.children
    )
  }
}
