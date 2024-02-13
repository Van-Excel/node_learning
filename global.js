//node has a global object

//console.log(global)


setTimeout(() =>{
    console.log('This is a global method.')
    clearInterval(cut)
    console.log('setInterval method has been destroyed')
}, 3000);

const cut = setInterval(() => {
    console.log('This is an interval')
},1000);

// filename & directory name

console.log(__dirname);
console.log(__filename);