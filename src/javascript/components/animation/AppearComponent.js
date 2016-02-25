import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class AppearComponent extends Component {

  static propTypes = {
    childNode: PropTypes.object,
    children: PropTypes.node,
    animated: PropTypes.bool,
    duration: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {
    const { childNode, animated, duration } = nextProps
    requestAnimationFrame(() => {
      if (childNode && animated) {
        childNode.style.display = `block`
        childNode.style.transition = duration
      }
      else if(!animated && childNode){
        childNode.style.display = `none`
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
