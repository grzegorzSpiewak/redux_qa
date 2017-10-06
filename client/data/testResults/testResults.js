const presentVar = {
  header: "Variables present in this call:",
  items: []
}

const missingVar = {
  header: "Variables missing in this call:",
  items: []
}

const otherVar = {
  header: "Other variables present in this call:",
  items: []
}

const testResults = {
  testname: {
    presentVar,
    missingVar,
    otherVar
  }
}

export default testResults
