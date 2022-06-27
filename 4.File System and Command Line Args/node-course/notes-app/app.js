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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// create list command
yargs.command({
    command: 'list',
  describe: 'List your notes',
  
    handler() {
        notes.listNotes()
        // console.log('Listing out all notes')
    }
})
// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        describe: 'Read a note',
        demandOption: 'true',
        type:'string'
    },
    handler(argv) {
    notes.readNote(argv.title)
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

/**
 * Challenge Time 2
 * 1.load existing notes
 * 2.use array filter  method to remove the matching note (if any)
 * 3.save the newly created away
 * 4.test your work with a title that exist and a title that doesn't exist
 */
/**
 * challenge Time 3
 *  challenge : use chalk to provide useful logs for remove
 *  1.if a note is removed print note removed! with a green background
 *  2.if no note is removed print no note found! with a red background
 */

/**
 * Challenge Time Lecture 22 Refactoring to use arrow functions
 * 1.If function is a method , use Es6 method defination syntax
 * 2.Otherwise, use most concise arrow function possible
 * 3.Test your work
 * 
 */
/**
 * Challenge Time Lecture 23 Listing Notes 
 * Goal: wire up list command
 * 1. create and export listNotes from notes.js
 *   -"Your noes using chalk"
 *   -Print note title for each note
 * 2. Call ListNotes from command handler
 * 3. Test your work
 * 
 */
/**
 *  Challenge Time Lecture 24 Reading a note
 *  Goal :wire up read command
 *  1.setup --title option for read command
 *  2.create readNote in notes.js
 *   - search for note by title
 *   - find note and print title (styled) and body (plain)
 * 3. Have the command hanlder call the function
 * 4. Test your work by runing a couple commands
 * 
 */