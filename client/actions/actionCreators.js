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

export function resultPassed(name, result, id) {
  return {
    type: 'RESULT_PASSED',
    name,
    result,
    id,
  }

}

export function resultFailed(name, result, value, id) {
  return {
    type: 'RESULT_FAILED',
    name,
    value,
    id
  }
}
