
const names = 'Yoshi';
console.log(names);

const nameCall = (par) => {
    console.log(`your name ${par} is a beautiful name `);
}

nameCall(names)

console.log('A');
setTimeout(() => {
    console.log('b')
}, 1000);

console.log('c')
console.log('d')

//events
const EventEmitter = require('node:events');

//task - create a start event that fires a callback that logs to the console

const newEvent = new EventEmitter();

newEvent.on('start', () => console.log('new event'));

//triggers event
newEvent.emit('start')