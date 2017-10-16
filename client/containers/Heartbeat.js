'use strict'
import React from 'react'

import TestDetails from '../components/TestDetails'
import Informations from '../components/Informations'
import Compare from '../components/Compare'
import MissingVar from '../components/MissingVar'
import PresentVar from '../components/PresentVar'
import CallSummary from '../components/CallSummary'

export default class Heartbeat extends React.Component {
  constructor (props) {
    super(props);
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
          <MissingVar {...this.props.results.missingVar} />
          :
          null
        }
        {
          this.props.results.presentVar ?
          <PresentVar {...this.props.results.presentVar} />
          :
          null
        }
        {console.log(testName)}
        <CallSummary testName = {testName}/>
      </div>
    )
  }
}
