function storeResults(state = [], action) {
  switch(action.type) {
    case 'SAVE_TEST_RESULTS' :
      return {...state, [action.name]: {
        missing: action.missingVar,
        passedTesting: action.passed,
        failedTesting: action.failed
      }}
    default:
      return state;
  }
}


export default storeResults;
