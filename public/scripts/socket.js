io = require('socket.io')();

io.on('connection', socket => {
  
  socket.on('entered', data => {  
    io.emit('entered message', data);
  });

  socket.on('disconnect', data => {
    console.log('disconnected from socket io');
  });

  socket.on('send', data => {
    io.emit('send message', data)
  });
});


module.exports = io;