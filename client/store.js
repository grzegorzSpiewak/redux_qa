import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import homepage from './data/pages/homepage'
import heartbeatTests from './data/heartbeatTests/testCases'

const defaultState = {
  homepage,
  heartbeatTests,
  dataToCompare: '',
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
