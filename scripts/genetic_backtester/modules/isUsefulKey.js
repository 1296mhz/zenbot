/**
 * Created by cshlovjah on 21.02.18.
 */
function isUsefulKey  (key)  {
  if(key == 'filename' || key == 'show_options' || key == 'sim') return false
  return true
}
module.exports = isUsefulKey
