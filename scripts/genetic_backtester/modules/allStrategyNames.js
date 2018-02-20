/**
 * Created by cshlovjah on 21.02.18.
 */
function allStrategyNames ()  {
  let r = []
  for (var k in strategies) {
    r.push(k)
  }
  return r
}

module.exports = allStrategyNames
