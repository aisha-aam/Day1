const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('message', (name) => {
  console.log(`Hello ${name}`);
});

emitter.emit('message', 'Aisha');