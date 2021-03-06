import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class ImageChangeComponent extends Component {

  static propTypes = {
    childNode: PropTypes.object,
    originalSource: PropTypes.string,
    newSource: PropTypes.string,
    children: PropTypes.node,
    animated: PropTypes.bool,
    duration: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {
    const { childNode, originalSource, newSource, animated, duration } = nextProps
    requestAnimationFrame(() => {
      if (childNode && animated) {
        childNode.style.backgroundImage = `url('${newSource}')`
        childNode.style.transition = duration
      }
      else if(!animated && childNode){
        childNode.style.backgroundImage = `url('${originalSource}')`
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
