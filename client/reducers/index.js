import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import dataToCompare from './dataToCompare'
import results from './compareData'
import passedChecked from './passedChecked'
import failedChecked from './failedChecked'
import storeResults from './storeResults'

const appReducer = combineReducers({
  homepage: (state = {}) => state,
  heartbeatTests: (state = {}) => state,
  passed: passedChecked,
  failed: failedChecked,
  saved: storeResults,
  results,
  dataToCompare,
  routing: routerReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOAD_TEST_PAGE') {
    state.results = {},
    state.passed = {},
    state.failed = {}
  }
  else if (action.type === 'START_NEW_TESTS') {
    state.results = {},
    state.passed = {},
    state.failed = {},
    state.saved = {}
  }
  return appReducer(state, action)
}

export default rootReducer
