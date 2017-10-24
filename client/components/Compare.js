import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreators'

function mapStateToProps(state) {
  return {
    dataToCompare: state.dataToCompare,
    results: state.results
  }
}

class CompareComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  updateDataToCompare (e) {
    e.preventDefault()
    const newValue = e.target.value
    this.props.getDataToCompare(newValue)
  }

  getResults (e) {
    e.preventDefault()
    const varRequired = this.props.items
    const varToValidate = this.props.dataToCompare.varToValidate
    varToValidate === undefined ? console.log("paste variables") : this.props.compareData(varRequired, varToValidate)
  }

  render() {
    return (
      <div className="wrap">
        <h1 className="compare__header">Copy and paste variables from saved logs</h1>
        <form className="compare__form" id="compare">
          <textarea
            type="Text"
            className="compare__form__textarea"
            onChange={this.updateDataToCompare.bind(this)}
          />
          <button
            type="button"
            name="compare_results"
            className="btn compare__form__button"
            onClick={this.getResults.bind(this)}
          >Compare</button>
        </form>
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const Compare = connect(mapStateToProps, mapDispachToProps)(CompareComponent)

export default Compare
