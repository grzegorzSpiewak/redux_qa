function resultValidation(state = [], action) {
  switch(action.type) {
    case 'RESULT_PASSED' :
      let passed = {
        name: action.name,
        result: action.result,
        id: action.id
      }
      console.log(state)
      return {
        ...state, resultValidation: 1
      }

    default:
      return state;
  }
}

export default resultValidation;
