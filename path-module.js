// path can help you access directory
const path = require('path')
console.log(path.sep)

const filePath = path.join('/Node/', 'node-one', 'app.js')
console.log(filePath)


// to get the base name 
 const base = path.basename(filePath)
 console.log(base)
//  console.log(path)

// path. resolve gets te absolute  and directory
const absolute = path.resolve(__dirname, 'Node', 'node-one', 'app.js')
// console.log(absolute)

// fs module- file system module helps store and manage data on the operating system

