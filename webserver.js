const http = require('http');

const server= http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello, Selamat datang di <b>NodeJs</b>!');
    res.end();
})
server.listen(8000);
console.log('Server running on port 8000');