"use strict";

var socket = io();
var user, room;
$(window).on('load', function () {
  socket.emit('entered', {
    roomId: $('#room_id').val(),
    user: $('#name').val()
  });
});
$(document).ready(function () {
  user = $('#name').val();
  room = $('#room_id').val();
  $('#chat-form').submit(function () {
    var message = $('#message').val();
    socket.emit('send', {
      roomId: room,
      message: "".concat(user, " : ").concat(message)
    });
    $('#message').val('');
    return false;
  });
  socket.on('send message', function (data) {
    var roomId = data.roomId,
        message = data.message;

    if (room == roomId) {
      $('#messages').append($('<li>').text(message));
    }
  }); //listen for responses

  socket.on('entered message', function (data) {
    var roomId = data.roomId,
        user = data.user;
    var enteredLobby = ' has entered the Lobby';
    var enteredGame = ' had entered the Game Room';

    if (room == roomId) {
      if (room == 0) {
        $('#messages').append($('<li>').text(user + enteredLobby));
      } else {
        $('#messages').append($('<li>').text(user + enteredGame));
      }
    }
  });
  socket.on('typing message', function (data) {
    var roomId = data.roomId,
        user = data.user;

    if (roomId == room) {
      $('#messages').append($('<li>').text(user + ' typing message...'));
    }
  });
});