import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dataToCompare from './dataToCompare';
import results from './compareData';
import passedChecked from './passedChecked'
import failedChecked from './failedChecked'

const rootReducer = combineReducers({
  homepage: (state = {}) => state,
  heartbeatTests: (state = {}) => state,
  passed: passedChecked,
  failed: failedChecked,
  results,
  dataToCompare,
  routing: routerReducer,
});

export default rootReducer;
