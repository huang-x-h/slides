'use strict';

const net = require('net');
const server = net.createServer((socket) => {
  socket.write('Echo Server');
  socket.on('data', function(data) {
    socket.write(data);
  });
});

server.listen(3000);


// telnet 127.0.0.1 3000
// output 'Echo Server'