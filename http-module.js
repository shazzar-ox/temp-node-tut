const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req)
if(req.url === '/')
{
    // res.write()
    res.end('welcome to the first elder live server')
}
if (req.url === '/about')
{
    res.end('Here is our short history')
}
res.end('error')
})

server.listen(5000)