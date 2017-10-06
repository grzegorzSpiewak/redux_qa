import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dataToCompare from './dataToCompare';

const rootReducer = combineReducers({
  homepage: (state = {}) => state,
  heartbeatTests: (state = {}) => state,
  dataToCompare,
  routing: routerReducer,
});

export default rootReducer;
