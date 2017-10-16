import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
  return {
    failed: state.failed,
    passed: state.passed
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="summary">
        <div className="summary__wrap">
          <h1 className="summary__header">{this.props.testName} Summary</h1>

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
