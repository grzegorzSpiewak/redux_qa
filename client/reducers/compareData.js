function compareData(state = [], action) {
  switch(action.type) {
    case 'COMPARE_DATA' :
      const varToValidate = action.varToValidate
      const varToValidateNames = varToValidate.map((check) => check.name)
      const varRequired = action.varRequired
      const presentNames = []
      const missingVar = {
        header: "The variables missing in this call:",
        items: []
      }
      const presentVar = {
        header: "Validate variables present in this call:",
        items: []
      }

      varRequired.forEach(reqVar => {
        if(!varToValidateNames.includes(reqVar.name)) {
          missingVar.items.push(reqVar)
        } else {
          presentNames.push(reqVar)
        }
      })

      varToValidate.map(searched => {
        const name = searched.name
        presentNames.forEach((item) => {
          if(name === item.name) {
            presentVar.items.push(searched)
          }
        })
      })

      return {
        ...state,
        missingVar,
        presentVar,
      }
    default:
      return state
  }
}

export default compareData
