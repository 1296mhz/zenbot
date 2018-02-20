/**
 * Created by cshlovjah on 21.02.18.
 */
let isUsefulKey = require('./isUsefulKey');

function generateCommandParams (input)  {
  input = input.params.replace('module.exports =','')
  input = JSON.parse(input)

  var result = ''
  var keys = Object.keys(input)
  for(let i = 0;i < keys.length;i++){
    var key = keys[i]
    if(isUsefulKey(key)){
      // selector should be at start before keys
      if(key == 'selector'){
        result = input[key] + result
      }

      else result += ' --'+key+'='+input[key]
    }

  }
  return result
}

module.exports = generateCommandParams
