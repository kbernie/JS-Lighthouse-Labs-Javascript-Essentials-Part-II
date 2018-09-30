var socket = io();

// event listener: when button clicked, the message will be sent - emit, using web sockets
$("button").on('click', function() {
  var text = $("#message").val();
  var who = $("#initials").val();
  
  socket.emit('message', who + ": " + text);
  $('#message').val('');
  
  return false;
});

//  listening for messages from the server and upon receiving one, it will simply use JQuery to add a new entry to the HTML:
socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
});
