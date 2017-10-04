'use strict'
import React from 'react'
import { Link } from 'react-router'


export default class Main extends React.Component {

  render () {
    return (
      <div>
        <h1>
          Hello {console.log(this.props)}
        </h1>
      </div>
    )
  }
}
