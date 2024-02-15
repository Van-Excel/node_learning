const express = require('express');

const app = express();
const port = 3000;

// home page
app.get('/', (req, res) => {
    console.log(req.url, req.method, res.statusCode)
    res.sendFile('./index.html', {root: __dirname})
});

//get about page
app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root:__dirname});
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 page
app.use((req, res) => {
    res.sendFile('./404.html', {root:__dirname})

})



app.listen(3000, () => {
    console.log(`the server is listening at port ${port}`);
});

console.log(__dirname);