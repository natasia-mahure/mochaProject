import chalk from 'chalk'

import figlet from 'figlet'
import greet from "./greet.js"

const grate = figlet.fontsSync
const groom = chalk.blue.bgWhite
console.log(grate(greet('Xola')))
console.log(groom(greet('Xola')))
