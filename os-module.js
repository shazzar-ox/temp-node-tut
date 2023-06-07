const os = require('os')

// info about the current user

const user = os.userInfo()
console.log(user)

// info abot the user uptime in seconds
console.log(`The user uptime is ${os.uptime()} seconds`)

// os module goves you information about the user operating systm

const cuurentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(cuurentOS)


