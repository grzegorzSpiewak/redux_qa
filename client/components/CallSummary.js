import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import { browserHistory } from 'react-router';

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
    return currentData.next
  }

  newTest() {
    const redirect = this.state.forTesting
    const nextTest = this.currentData.next
    const query = nextTest.replace(/ /g, "")
    browserHistory.push({pathname: redirect, query: {name: query}})
  }

  saveSummary(e) {
    e.preventDefault()
    const name = this.props.testName
    const passed = this.props.passed
    const failed = this.props.failed
    const saveMissing = this.props.results.missingVar ? this.props.results.missingVar : "There are no missing variables"
    const savePassed = Object.keys(passed).length > 0 ? passed : "All variables present in call return incorect data"
    const saveFailed = Object.keys(failed).length > 0 ? failed : "All variables present in call return wrong data"

    this.props.storeResults(name, saveMissing, savePassed, saveFailed)
    this.props.loadTest()
    this.newTest()
  }

  render() {
    return (
      <section className="summary">
        <div className="summary__wrap">
          <h1 className="summary__header" onClick={this.nextTest.bind(this)}>Save test results</h1>
          <p className="summary__caption">Next test is {this.nextTest()}</p>
          {
            this.currentData.next === null ? null : <button type="button" onClick={this.saveSummary.bind(this)}>Go</button>
          }
          {
            Object.keys(this.props.saved).length > 0 ?
            <button type="button">Create Report</button>
            :
            null
          }
        </div>
      </section>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const CallSummary = connect(mapStateToProps, mapDispachToProps)(Summary);

export default CallSummary;
