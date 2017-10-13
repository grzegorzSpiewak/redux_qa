import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Layout from './Layout';

function mapStateToProps(state) {
  return {
    homepage: state.homepage,
    heartbeatTests: state.heartbeatTests,
    dataToCompare: state.dataToCompare,
    results: state.results,
    passed: state.passed,
    failed: state.failed,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Layout);

export default App;
