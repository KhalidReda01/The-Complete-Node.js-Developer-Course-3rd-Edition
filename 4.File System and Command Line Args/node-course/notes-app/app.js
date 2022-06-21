
const getNotes = require('./notes.js')
console.log(getNotes())

const chalk = require('chalk');
console.log(chalk.blue.inverse.bold('Sucess!'))
console.log(process.argv[2])