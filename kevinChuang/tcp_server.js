/*eslint-env es6*/
/*jshint esversion:6*/

const net = require('net');

exports = module.exports = {};
const sockets = [];

exports = net.createServer((socket) => {
  socket.name = socket.remotePort;
  socket.write('Hi ' + socket.name + '!\n');
  sockets.push(socket);

  exports.broadcast = function (message, sender) {
    sockets.forEach((s) => {
      if(s !== sender) {
        s.write(socket.name + '> ' + message);
      }
    });
  };

  socket.on('data', (chunk) => {
    exports.broadcast(chunk, socket);
  });
}).listen(3000, () => {
  console.log('chat server started on port 3000');
});

// const client = net.connect(3000, () => {
//   client.write('message');
// });
