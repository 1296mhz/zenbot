/**
 * Created by cshlovjah on 21.02.18.
 */
let readSimDataFile = (iteration) => {
  let jsonFileName = `simulations/${population_data}/gen_${generationCount}/sim_${iteration}.json`

  if (fs.existsSync(jsonFileName)) {
    let simData = JSON.parse( fs.readFileSync(jsonFileName, { encoding:'utf8' }) )
    return simData
  }
  else {
    return null
  }
}

module.exports = readSimDataFile
