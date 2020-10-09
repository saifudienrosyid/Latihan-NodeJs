const http= require('http')

const server = http.createServer(function(req, res)
{
    res.writeHead(200,{'Content-Type':'text/html'})
    switch (req.url) {
        case '/about':
            res.write('Ini halaman about')
            break;
        case '/produk':
            res.write('Ini halaman produk')
            break;
        case '/profile':
            res.write('Ini halaman profile')
            break;
        default:
            res.write('404 Page Not Found')
            break;

    }
    res.end()
})

server.listen(8000)
console.log('Server running on port 8000')
