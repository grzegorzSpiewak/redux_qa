import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dataToCompare from './dataToCompare';
import results from './compareData';

const rootReducer = combineReducers({
  homepage: (state = {}) => state,
  heartbeatTests: (state = {}) => state,
  results,
  dataToCompare,
  routing: routerReducer,
});

export default rootReducer;
