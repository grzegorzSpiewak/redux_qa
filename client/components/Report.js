import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreators'
import Animated from './Animated'
import ReportResult from './ReportResult'
import ReportDetails from './ReportDetails'

function mapStateToProps(state) {
  return {
    saved: state.saved,
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
    }
  }

  handleClick(e) {
    this.setState({
      current: e.target.id,
    })
  }

  renderResults(results) {
    return results.map((result, i) =>
      result.status === 'Failed' ?
      <div className="report__result" key={i}>
        <ReportResult
          status={result.status}
          name={result.name}
          index={i}
          onClick={this.handleClick.bind(this)}
        />
        {
          result.hasDetails === true && this.state.current == i ?
          <div className="report__result__details">
          {
            Object.keys(result.missing).length > 0 ?
            <Animated
              transitionName={'show'}
              className={'report__result__details__missing'}
              component={'div'}
            >
              <ReportDetails
                header={'Missing Variables'}
                items={result.missing}
              />
            </Animated>
            :
            null
          }
          {
            typeof(result.failedTesting) === 'object' ?
            <Animated
              transitionName={'show'}
              className={'report__result__details__missing'}
              component={'div'}
            >
              <ReportDetails
                header={'Incorrect values'}
                items={Object.keys(result.failedTesting).map(key=> result.failedTesting[key])}
              />
            </Animated>
            :
            null
          }
          </div>
          :
          null
        }
      </div>
      :
      <div className="report__result" key={i}>
        <ReportResult status={result.status} name={result.name} index={i}/>
      </div>
    )
  }

  render() {
    const saved = this.props.saved
    const savedToRender = Object.keys(saved).map(key => saved[key])
    return (
      <div className="wrap">
        <h1 className="report__header">Analytics Summary</h1>
        <div className="report__list">
          {this.renderResults(savedToRender)}
        </div>
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Report = connect(mapStateToProps, mapDispachToProps)(Summary)

export default Report
