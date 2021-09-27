const io = require('socket.io')(3000, {
    cors: {
        origin: ['*'],
    },
});

io.on("connection", function(socket) {
  console.log("user connected");
  socket.emit("welcome", "welcome man");
});
