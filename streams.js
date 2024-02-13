const fs = require('node:fs')

const readStream = fs.createReadStream('./docs/buffer.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/writeBuffer.txt')
/*readStream.on('data', (chunk) => {
    console.log('------------new chunk--------------\n')
    console.log(chunk)
   
    writeStream.write('----new WRITE CHUNK------\n')
    writeStream.write(chunk)
})
**/
readStream.pipe(writeStream);


//revise & research on buffers, streams, pipes and the events.