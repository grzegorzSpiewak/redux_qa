import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreators'
import { browserHistory } from 'react-router'

function mapStateToProps(state) {
  return {
    results: state.results,
    failed: state.failed,
    passed: state.passed,
    saved: state.saved,
    testSuites: state.homepage.select.suites
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      forTesting: '/heartbeat',
      forReport: '/summary'
    }
  }

  nextTest() {
    const testSuites = this.props.testSuites
    const currentTestName = this.props.testName
    let currentData = ''

    testSuites.map(test => test.value === currentTestName ? currentData = test : null)
    this.currentData = currentData

    const nextCapttion = currentData.next === null ? <i className="fa fa-smile-o" aria-hidden="true"></i> : 'Next test is ' + currentData.next
    return nextCapttion
  }

  goSummary() {
    const forReport = this.state.forReport
    browserHistory.push({pathname: forReport})
  }

  newTest() {
    const forTesing = this.state.forTesting
    const nextTest = this.currentData.next
    const query = nextTest.replace(/ /g, "")
    browserHistory.push({pathname: forTesing, query: {name: query}})
  }

  passedOrFailed(saveMissing, saveFailed) {
    let status = ''

    saveMissing.items.length > 0 || typeof(saveFailed) === 'object' ? status = 'Failed' :  status = 'Passed'
    return status
  }


  saveSummary(e) {
    e.preventDefault()
    const name = this.props.testName
    const passed = this.props.passed
    const failed = this.props.failed
    const saveMissing = this.props.results.missingVar
    const savePassed = Object.keys(passed).length > 0 ? passed : null
    const saveFailed = Object.keys(failed).length > 0 ? failed : 'Ale returned values are correct'
    const status = this.passedOrFailed(saveMissing, saveFailed)
    const hasDetails = status === 'Passed' ? false : true

    this.props.storeResults(name, status, saveMissing, savePassed, saveFailed, hasDetails)
    this.props.loadTest()
    this.newTest()
  }

  render() {
    return (
      <div className="wrap summary">
        <h1 className="summary__header" onClick={this.nextTest.bind(this)}>Finish testing and go for next test</h1>
        <p className="summary__caption">{this.nextTest()}</p>
        {
          this.currentData.next === null ? null : <button type="button" className="btn summary__caption__btn" onClick={this.saveSummary.bind(this)}>Go</button>
        }
        {
          Object.keys(this.props.saved).length > 0 ?
          <div>
            <p className="summary__caption">Done testig? Click</p>
            <button type="button" className="btn" onClick={this.goSummary.bind(this)}>Create Report</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const CallSummary = connect(mapStateToProps, mapDispachToProps)(Summary)

export default CallSummary
