const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = "Khalid Reda",
  user.age = "23"
const userJSON = JSON.stringify(usewr)
fs.writeFileSync('1-json.json',userJSON)