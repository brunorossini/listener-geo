const dgram = require("dgram");
const server = dgram.createSocket("udp4");

let listenerUDP = function() {
  server.on("error", err => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  });

  server.on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    var ack = new Buffer.from("134");
    server.send(ack, 0, ack.length, rinfo.port, rinfo.address, function(
      err,
      bytes
    ) {
      console.log("sent ACK.");
    });
  });

  server.on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });
  server.bind(6060);
};

module.exports = listenerUDP;
