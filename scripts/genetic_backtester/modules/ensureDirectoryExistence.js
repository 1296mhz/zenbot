/**
 * Created by cshlovjah on 21.02.18.
 */
let path = require('path')
let fs = require('fs')

let ensureDirectoryExistence = (filePath) => {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

module.exports = ensureDirectoryExistence
