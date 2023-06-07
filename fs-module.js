// method one sync method(blocking method)

const { log, clear } = require('console')
const {readFileSync, writeFileSync} = require('fs')

// readfilesync takes two parameters one os the link to the file and the second is the encoding
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// log(first, second)


// write file sync takes two paramters one is the path to the file and the second is the text content
// writeFileSync('./content/result.txt', `this is the second statement appneded file: ${first }, ${second}`, {flag:'a'})


// method two async pattern(non-blocking).....

const {readFile, writeFile}= require('fs')
// read file takes two parameters one is the path , thee other is the function that can check for error or result...
readFile('./content/first.txt','utf-8', (err, result)=>{
    if (err)
    {
        console.log(err)
        return;
    }
    const readFirst = result
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if (err)
        {
            log(`Second error: ${err}`)
        }
    const secondRead = result

    writeFile('./content/result2.txt',
     `This is where the second function starts i.e readfile and write file : ${readFirst} ${secondRead}`, (err, result)=>{
         if(err)
         {
            console.log(err)
            return
         }
         log(result)

     })
    })
   
})