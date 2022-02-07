const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
    console.log('halo, selamat datang')
})

myEmitter.on('error', () => {
    console.error('Telah terjadi error')
})

myEmitter.emit('event')
myEmitter.emit('event')

myEmitter.emit('error', new Error('whoops'))
