const http = require('node:http');
const fs = require('node:fs');


//creating server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, res.statusCode)

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
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

});