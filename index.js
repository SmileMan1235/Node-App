const readLine = require("readline")
const shape = require("./modules/shape.js")
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("cock? ")
rl.question("", (input) => {
  shape.cock()
  return process.exit(1)
})