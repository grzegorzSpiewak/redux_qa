import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    dataToCompare: state.dataToCompare,
    results: state.results
  }
}

class CompareComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  updateDataToCompare (e) {
    const newValue = e.target.value
    this.props.getDataToCompare(newValue)
  }

  getResults (e) {
    e.preventDefault()
    const varRequired = this.props.items
    const varToValidate = this.props.dataToCompare.varToValidate
    this.props.compareData(varRequired, varToValidate)
  }

  render() {
    return (
      <section className="compare">
        <h1 className="compare__header">Copy and paste variables from saved logs</h1>
        <form className="compare__form" id="compare">
          <textarea
            className="compare__form__textarea"
            onChange={this.updateDataToCompare.bind(this)}
          />
          <input
            type="button"
            value="Compare"
            name="compare_results"
            className="compare__form__button"
            onClick={this.getResults.bind(this)}
          />
        </form>
      </section>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Compare = connect(mapStateToProps, mapDispachToProps)(CompareComponent);

export default Compare;
