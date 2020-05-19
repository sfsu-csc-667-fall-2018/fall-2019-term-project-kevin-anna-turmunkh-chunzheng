const socket = io();

let user, room;

$(window).on('load', () => {
  socket.emit('entered', {
    roomId: $('#room_id').val(),
    user: $('#name').val()
  });
});

$(document).ready(() => {

  user = $('#name').val();
  room = $('#room_id').val();

  $('#chat-form').submit(() => {
    const message = $('#message').val();

    socket.emit('send', {
      roomId: room,
      message: `${user} : ${message}`
    });

    $('#message').val('');
    return false;
  });

  socket.on('send message', data => {
    const { roomId, message } = data;
    if (room == roomId) {
      $('#messages').append($('<li>').text(message));
    }
  });

  socket.on('entered message', data => {
    const { roomId, user } = data;

    const lobby = ' joined Lobby';
    const game = ' joined into Game';

    if (room == roomId) {
      if (room == 0) {
        $('#messages').append($('<li>').text(user + lobby));
      } else {
        $('#messages').append($('<li>').text(user + game + roomId));
      }
    }

  });
});