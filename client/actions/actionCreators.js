export function getDataToCompare(value) {
  return {
    type: 'GET_DATA_TO_COMPARE',
    value
  }
}

export function prepareData(value) {
  return {
    type: 'PREPARE_DATA_TO_COMPARE',
    value
  }
}
