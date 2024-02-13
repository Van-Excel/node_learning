const http = require('node:http');
const fs = require('node:fs');


//creating server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, res.statusCode)

    //set headers
    res.setHeader('Content-Type', 'text/html')

    //routing
    let path = './views';

    switch(req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200;
            break;

        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;

        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        console.log('file read successfully');
        res.write(data);
        res.end();
    })
})




// server is just created but not listening for requests

server.listen(3000, 'localhost', () => {
    console.log(server.listening);
    console.log('The server is listening at port 3000...');

})