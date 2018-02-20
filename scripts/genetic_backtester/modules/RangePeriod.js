/**
 * Created by cshlovjah on 21.02.18.
 */
function RangePeriod  (min, max, period_length)  {
  var r = {
    type: 'period_length',
    min: min,
    max: max,
    period_length: period_length
  }
  return r
}

module.exports = RangePeriod
