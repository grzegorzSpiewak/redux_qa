import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dataToCompare from './dataToCompare';
import results from './compareData';
import resultValidation from './resultValidation'

const rootReducer = combineReducers({
  homepage: (state = {}) => state,
  heartbeatTests: (state = {}) => state,
  resultValidation,
  results,
  dataToCompare,
  routing: routerReducer,
});

export default rootReducer;
