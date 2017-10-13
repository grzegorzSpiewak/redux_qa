function failedChecked(state = [], action) {
  switch(action.type) {
    case 'FAILED_CHECKBOX_CLIKED' :
      if(action.isChecked === true) {
        return {...state, [action.id]: {name: action.name}}
      } else {
        delete state[action.id]
        return { ...state}
      }
      return state
    case 'UPDATE_REASON' :
       const name = state[action.id].name
       return {...state, [action.id]: {
         name: name,
         value: action.value
       }}
  return state
    default:
      return state;
  }
}


export default failedChecked;
