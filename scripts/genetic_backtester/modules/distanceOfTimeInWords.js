/**
 * Created by cshlovjah on 21.02.18.
 */
module.exports = (timeA, timeB) => {
  var hourDiff = timeA.diff(timeB, 'hours')
  let minDiff = 0
  if (hourDiff == 0) {
    minDiff = timeA.diff(timeB, 'minutes')
    var secDiff = timeA.clone().subtract(minDiff, 'minutes').diff(timeB, 'seconds')
    return `${minDiff}m ${secDiff}s`
  }
  else {
    minDiff = timeA.clone().subtract(hourDiff, 'hours').diff(timeB, 'minutes')
    return `${hourDiff}h ${minDiff}m`
  }
}
