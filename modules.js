// There are user defined modules, third party modules & node modules.


//user defined modules
const {peoples, ages}= require('./people');


console.log(peoples);
console.log(ages);


//node modules

const os = require('node:os');
console.log(os.arch)
console.log(os.arch());


