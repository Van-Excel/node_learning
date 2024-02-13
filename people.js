
const peoples = ['kofu', 'asane', 'santim', 'loki']
const ages = [23, 45, 67, 43 ];

console.log(peoples)

// you have to manually export it before it can be used
// in another file



//export multiples things with object destructuring

module.exports = {
    peoples, ages
}