import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homepage from './homepage'
import heartbeatTests from './heartbeatTests'

const rootReducer = combineReducers({
  homepage,
  heartbeatTests,
  routing: routerReducer,
});

export default rootReducer;
