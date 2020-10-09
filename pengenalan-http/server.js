const http= require('http')

const server = http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type':'application/json'})
    res.write(JSON.stringify({success:true}))
    res.end()
})

server.listen(8000)
console.log('Server running on port 8000')