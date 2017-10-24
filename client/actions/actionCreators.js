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

export function storeResults(name, status, missingVar, passed, failed, hasDetails) {
  return {
    type: 'SAVE_TEST_RESULTS',
    status,
    name,
    missingVar,
    passed,
    failed,
    hasDetails,
  }
}

export function loadTest(state) {
  return {
    type: 'LOAD_TEST_PAGE',
    state
  }
}

export function startNewTests(state) {
  return {
    type: 'START_NEW_TESTS',
    state
  }
}
