const fs = require('fs')

// const book = {
//   title: 'Ego is the Enemy',
//   author:'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data =JSON.parse(dataJSON)
// console.log(data.title)


/**
 * Challenge Time
 * 1.Load and parse the JSON data
 * 2.Change the name and age property using the info
 * 3.Stringify the changed object and overwrite the original data
 * 4.Test your work by viewing data in the JSON file
 */


//1.Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataaJSON = dataBuffer.toString()
const data = JSON.parse(dataaJSON)

console.log(data)
//2.Change the name and age property using the info
console.log(data.name = "yousef")
console.log(data)
//3.Stringify the changed object and overwrite the original data
const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJSON)