var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

let Debug = position => {
  io.emit("debug", position);
};

io.on("connection", function(socket) {
  // console.log("a user connected");
});

http.listen(process.env.PORT_DEBUG, function() {
  console.log(`debug listening on *:${process.env.PORT_DEBUG}`);
});

module.exports = Debug;
