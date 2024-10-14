// TODO 1
const { EventEmitter } = require('events');
  
const birthdayEventListener = ({ name }) => {
    console.log(`Happy birthday ${name}!`);
}
   
// TODO 3
const myEventEmitter = new EventEmitter();

// TODO 2
myEventEmitter.on('birthday', birthdayEventListener);

// TODO 4
myEventEmitter.emit('birthday', { name: "Farma" });