'use strict'
import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Animated extends React.Component {

  render () {
    return (
      <CSSTransitionGroup
        component="section"
        className={this.props.className}
        transitionName={this.props.name}
        transitionAppear={true}
        transitionLeave={true}
        transitionEnterTimeout={500}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={500}>
        { React.cloneElement(this.props.children, this.props) }
      </CSSTransitionGroup>
    )
  }
}
