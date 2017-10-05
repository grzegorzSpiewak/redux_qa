function homepage(state = [], action) {
  switch(action.type) {
    case 'LOAD_MAIN_PAGE' :
      return [
        ...state.homepage
      ]
    default:
      return state;
  }
}
export default homepage;
