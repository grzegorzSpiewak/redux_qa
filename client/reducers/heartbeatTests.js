function heartbeatTests(state = [], action) {
  switch(action.type) {
    case 'LOAD_HEARTBEAT_TESTS_DATA_PAGE' :
      return [
        ...state.heartbeatTests
      ]
    default:
      return state;
  }
}
export default heartbeatTests;
