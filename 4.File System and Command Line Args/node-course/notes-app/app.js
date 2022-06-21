
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
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type:'string'
    },
    note: {
      describe: 'this is the note from challenge',
      demandOption: true,
      type:'string'
    }
  },
  handler: function (argv) {
   
    console.log('Title',argv.title)
    console.log('Note',argv.note)
  }
})
// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note')
  }
})
// creat list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('Listing the note')
  }
})
// add,remove,read,list
/**
 * Challenge Time 
 * add an option to yargs  
 * 1.setup a body option for the add command 
 * 2.configure a description,make it required and for it to be a string 
 * 3.log the body value in the  handler function
 * 4.Test your work 
 */

yargs.parse()

// console.log(yargs.argv)

