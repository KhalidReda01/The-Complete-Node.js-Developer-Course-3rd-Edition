const fs=require('fs')
const getNotes = function () {
  return "My notes ..."
}
const addNote = function (title,body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title===title
  })
  console.log(notes)
  if (duplicateNotes.length===0) {
    
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }

}
const removeNote = function (title) {
  console.log('removedTitle is '+title)
}
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function () {
  try {
     const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
  return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
  
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote:removeNote
}