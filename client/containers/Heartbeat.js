'use strict'
import React from 'react'

import TestDetails from '../components/TestDetails'
import Informations from '../components/Informations'
import Compare from '../components/Compare'
import Missing from '../components/Missing'
import Present from '../components/Present'

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
          this.props.results[0] && this.props.results[0].items.length > 0 ?
            <Missing { ...this.props.results[0] }/>
            :
            null
        }
        {
          this.props.results[1] && this.props.results[1].items.length > 0?
          <Present {...this.props.results[1]} />
          :
          null
        }
      </div>
    )
  }
}
