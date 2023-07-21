// EVENTS
// Event Driven Programming
// Used heavily in Node.js
// Listen for events and fire functions

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// ORDER MATTERS! LISTEN THEN EMIT

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34)
