const dgram = require("dgram");
const server = dgram.createSocket("udp4");
let Protocol = require("../jobs/Protocol");
let Store = require("../jobs/Store");

let listenerUDP = function () {
  server.on("error", err => {
    console.log(`server error:\n${err.stack}`);
    server.close();
  });

  server.on("message", async (msg, rinfo) => {
    console.log(msg.toString());
    let position;
    position = await Protocol(msg.toString());
    if (position && position.date.isValid()) Store(position);

    let buff = msg.toString().split(";");
    let ack = new Buffer.from(
      `${buff[0]};A;${buff[2]};${buff[3]};${buff[4]};${buff[5]};6;FIM;`
    );
    console.log(
      `${buff[0]};${buff[1]};${buff[2]};${buff[3]};${buff[4]};${buff[5]};6;FIM;`
    );
    server.send(ack, 0, ack.length, rinfo.port, rinfo.address, function (
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
