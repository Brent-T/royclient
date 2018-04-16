const random = require('random-item')
const roycuotes = require('../assets/roycuotes.json')

function getRoycuote() {
  return random(roycuotes)
}
