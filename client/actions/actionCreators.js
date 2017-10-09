export function getDataToCompare(value) {
  return {
    type: 'GET_DATA_TO_COMPARE',
    value
  }
}

export function compareData(varRequired, varToValidate) {
  return {
    type: 'COMPARE_DATA',
    varRequired,
    varToValidate
  }
}
