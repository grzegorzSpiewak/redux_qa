function passedChecked(state = [], action) {
  switch(action.type) {
    case 'PASSED_CHECKBOX_CLIKED' :
      if(action.isChecked === true) {
        return {
          ...state,
          [action.id]: {
            name: action.name,
            id: action.id
          }
        }
      } else {
        delete state[action.id]
        return { ...state}
      }
      return state
    default:
      return state
  }
}


export default passedChecked;
