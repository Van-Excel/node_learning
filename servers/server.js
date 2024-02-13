const http = require('node:http');


//creating server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, res.statusCode)

    res.setHeader('Content-Type', 'text/html')

    res.write('<h1>Hello this is the home page.</h1>');
    res.end();
})




// server is just created but not listening for requests

server.listen(3000, 'localhost', () => {
    console.log(server.listening);
    console.log('The server is listening at port 3000...');

})