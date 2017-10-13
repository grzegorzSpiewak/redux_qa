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

export function passedChecked(isChecked, id, name) {
  return {
    type: 'PASSED_CHECKBOX_CLIKED',
    isChecked,
    id,
    name,
  }
}

export function failedChecked(isChecked, id, name, value) {
  return {
    type: 'FAILED_CHECKBOX_CLIKED',
    isChecked,
    id,
    name,
  }
}

export function failedReason(id, value) {
  return {
    type: 'UPDATE_REASON',
    id,
    value
  }
}
