'use strict'
import React from 'react'

import TestDetails from '../components/TestDetails'
import Informations from '../components/Informations'
import Compare from '../components/Compare'
import Result from '../components/Result'

export default class Heartbeat extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testReport: {}
    }
  }

  render () {
    const testName = this.props.location.query.name
    const testData = this.props.heartbeatTests[testName]

    return (
      <div>
        <TestDetails { ...testData } />
        <Informations { ...testData } />
        <Compare { ...testData }/>
        {
          this.props.results.missingVar ?
          <Result {...this.props.results.missingVar} />
          :
          null
        }
        {
          this.props.results.presentVar ?
          <Result {...this.props.results.presentVar} />
          :
          null
        }
      </div>
    )
  }
}
