"use strict";

io = require('socket.io')();
io.on('connection', function (socket) {
  console.log('connected to server socket');
  socket.on('entered', function (data) {
    io.emit('entered message', data);
  });
  socket.on('typing', function (data) {
    io.emit('typing message', data);
  });
  socket.on('disconnect', function (data) {
    console.log('disconnected from socket io');
  });
  socket.on('send', function (data) {
    io.emit('send message', data);
  });
});
module.exports = io;