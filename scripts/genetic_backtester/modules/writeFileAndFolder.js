/**
 * Created by cshlovjah on 21.02.18.
 */
let fs = require('fs')
let ensureDirectoryExistence = require('./ensureDirectoryExistence')

let writeFileAndFolder = (filePath, data) => {
  ensureDirectoryExistence(filePath)
  fs.writeFile(filePath, data, err => {
    if (err) throw err
  })
}

module.exports = writeFileAndFolder
