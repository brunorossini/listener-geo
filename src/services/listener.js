const net = require("net");
let Protocol = require("../jobs/Protocol");
let Store = require("../jobs/Store");
let Debug = require("../jobs/Debug");

let listener = function() {
  net
    .createServer(socket => {
      socket.setEncoding("utf8");
      socket.on("data", async data => {
        console.log(data);
        let position;
        // console.log(data);
        if (data.indexOf("$") >= -1) {
          position = data.split("$")[0];
        } else {
          position = data.split("\r")[0];
        }
        position = await Protocol(position);
        Debug(position);
        if (position) Store(position);
      });

      socket.on("error", function() {
        console.log("\n Cliente desconectao por erro ");
      });
    })
    .listen(process.env.PORT_LISTENER);

  console.log("#SERVICE ... LISTENER");
};

module.exports = listener;
