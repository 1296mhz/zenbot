/**
 * Created by cshlovjah on 21.02.18.
 */
function RangeFactor  (min, max, factor)  {
  var r = {
    type: 'intfactor',
    min: min,
    max: max,
    factor: factor
  }
  return r
}

module.exports = RangeFactor
