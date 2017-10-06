'use strict'
import React from 'react'

import TestDetails from '../components/TestDetails'
import Informations from '../components/Informations'
import Compare from '../components/Compare'

export default class Heartbeat extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const testName = this.props.location.query.name
    const testData = this.props.heartbeatTests[testName]

    return (
      <div>
        <TestDetails {...testData} />
        <Informations {...testData} />
        <Compare {...this.props} {...testData}/>
      </div>
    )
  }
}
