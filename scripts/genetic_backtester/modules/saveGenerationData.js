/**
 * Created by cshlovjah on 21.02.18.
 */
let fs = require('fs')

function saveGenerationData (csvFileName, jsonFileName, dataCSV, dataJSON) {
  try {
    fs.writeFileSync(csvFileName, dataCSV)
    console.log('> Finished writing generation csv to ' + csvFileName)
  }
  catch (err) {
    throw err
  }

  try {
    fs.writeFileSync(jsonFileName, dataJSON)
    console.log('> Finished writing generation json to ' + jsonFileName)
  }
  catch (err) {
    throw err
  }
}

module.exports = saveGenerationData
