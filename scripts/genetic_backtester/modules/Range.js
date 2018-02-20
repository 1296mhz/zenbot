/**
 * Created by cshlovjah on 21.02.18.
 */
function Range  (min, max)  {
  var r = {
    type: 'int',
    min: min,
    max: max
  }
  return r
}

module.exports = Range
