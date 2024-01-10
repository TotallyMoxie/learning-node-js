// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// use require in globals file
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // if we have a funciton inside the module we can call it here
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)