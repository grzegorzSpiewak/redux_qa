function dataToCompare(state = [], action) {
  switch(action.type) {
    case 'GET_DATA_TO_COMPARE' :
      const data = JSON.stringify(action.value)
      const pairs =  data.replace(/(?:\\[rn]|[\r\n]+)+/g, '", "')
      const cleanPairs = pairs.replace(/\\t/g, ' ')
      const varToValidate = cleanPairs.split(', ').map(elem => elem.replace(/(^"|"$)/g, "")).map(elem => {
        const splitPairs = elem.split(' ')
        let name = splitPairs[0]
        let value = splitPairs[1]
        if (splitPairs.length > 2) {
          name = splitPairs[0]
          value = splitPairs.splice(1).join(' ')
        }
        const pairsToCheck = {
          name,
          value
        }
        return pairsToCheck
      })

      return {...state,
        varToValidate
      }
    default:
      return state
  }
}

export default dataToCompare
