const http = require('http');

const server= http.createServer(function (req,res) {
    res.end('Helo, Selamat datang di pelatihan NodeJs');
})
server.listen(8000);
console.log('Server running on port 8000');