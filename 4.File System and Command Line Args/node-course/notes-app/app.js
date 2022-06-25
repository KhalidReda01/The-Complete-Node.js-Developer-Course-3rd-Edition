const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')
// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type:'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type:'string'
        }
    }
    ,
    handler: function (argv) {
        notes.addNote(argv.title,argv.body)
    }
})
// create remove command 
yargs.command({
    command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'removed title',
      demandOption: 'true',
      type:'string'
    }
  },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
// create list command
yargs.command({
    command: 'list',
  describe: 'List your notes',
  
    handler: function () {
        console.log('Listing out all notes')
    }
})
// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})
// console.log(yargs.argv)
yargs.parse()

/**
 * Challenge Time
 * 1.setup the remove command to take a required --title option
 * 2.create and export a removeNote function from notes.js
 * 3.call removeNote in remove command hanlder
 * 4.have removeNote  log the title of the note to be removed
 * 5.test your work using: node app.js remove --title ='some title'
 */