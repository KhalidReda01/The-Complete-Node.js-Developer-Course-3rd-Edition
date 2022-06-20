const fs=require('fs')

fs.writeFileSync('notes.txt', 'My name is Khalid.');

fs.appendFileSync('notes.txt', ' I live in Mansura.')

// Challenge Time 
// Append a message to notes.txt any message Khalid actually It's the same thing 
// 1.use appendFileSync to append to the file
// 2.run the script
// 3.check your work by opening the file and viewing the appended text 
// fs.writeFileSync('my notes.txt', "I'm khalid I live in Mansura. ")
