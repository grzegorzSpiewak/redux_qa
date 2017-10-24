function storeResults(state = [], action) {
  switch(action.type) {
    case 'SAVE_TEST_RESULTS' :
      return {...state, [action.name]: {
        name: action.name.match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
        status: action.status,
        missing: action.missingVar.items,
        passedTesting: action.passed,
        failedTesting: action.failed,
        hasDetails: action.hasDetails,
      }}
    default:
      return state
  }
}


export default storeResults
