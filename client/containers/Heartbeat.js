'use strict'
import React from 'react'

export default class Heartbeat extends React.Component {

  render () {
    return (
      <div className="container__wrap">
        Hello from Heartbeat{console.log(this.props)}
      </div>
    )
  }
}
