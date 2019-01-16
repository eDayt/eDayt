// api/index.js
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001/');

function connectIo(cb) {
  // listen for any messages coming through
  // of type 'chat' and then trigger the 
  // callback function with said message
  socket.on('chat', (message) => {
    // console.log the message for posterity
    console.log(message, 'api')
    // trigger the callback passed in when
    // our App component calls connect
    cb(message);
  })
}

export { connectIo }