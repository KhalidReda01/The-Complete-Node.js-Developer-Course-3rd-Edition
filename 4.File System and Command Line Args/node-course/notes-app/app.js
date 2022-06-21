
const getNotes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note!')
  }
})
// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})
// add,remove,read,list
/**
 * Challenge Time
 * Challenge : Add two new commands
 * 
 * 1. setup command to support "list" command (Print placeholder messsage for now)
 * 2. setup command to support "read" command (Print placeholder message for now)
 * 3. Test your work by runing both commands and ensure correct output
 */
console.log(yargs.argv)

