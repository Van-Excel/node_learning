const fs = require('node:fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
    

})

//writing files

fs.writeFile('./docs/blog1.txt', 'hello world', (err) => {
    if (err) {
        console.log(err)
    }

    console.log('file was written');
})

//directories

if (!fs.existsSync('./components')) {

    fs.mkdir('./components', (err) =>{
        if (err){
            console.log(err);
        }
        console.log('folder has been created');
    })

}



//deleting directories

if (fs.existsSync('./components')) {


    fs.rmdir('./components', (err) => {
        if (err){
            console.log(err)

        }

        console.log('folder deleted')
        
    })

}


//deleting files

if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}
