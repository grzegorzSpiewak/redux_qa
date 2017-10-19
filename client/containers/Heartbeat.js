'use strict'
import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import TestDetails from '../components/TestDetails'
import Informations from '../components/Informations'
import Compare from '../components/Compare'
import MissingVar from '../components/MissingVar'
import PresentVar from '../components/PresentVar'
import CallSummary from '../components/CallSummary'
import Select from '../components/Select'
import Animated from '../components/Animated'

export default class Heartbeat extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const testName = this.props.location.query.name
    const testData = this.props.heartbeatTests[testName]

    return (
      <div className="page">
        <TestDetails { ...testData } />
          <div className="flex-container">
          <Informations { ...testData } />
            <div className="test-container">
            {
              this.props.results.missingVar ?
              null
              :
              <Compare { ...testData }/>
            }
            {
              this.props.results.missingVar ?
              <Animated name={'show'} className={'results'}>
                <MissingVar {...this.props.results.missingVar} />
              </Animated>
              :
              null
            }
            {
              this.props.results.presentVar ?
              <Animated name={'show'} className={'results'}>
                <PresentVar {...this.props.results.presentVar} />
              </Animated>
              :
              null
            }
            </div>
          </div>
        <CallSummary testName = {testName}/>
      </div>
    )
  }
}
