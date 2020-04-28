const net = require("net");
let Debug = require("../jobs/Debug");
let Worker = require("../jobs/Worker")

let listener = function() {
  net
    .createServer(socket => {
      socket.setEncoding("utf8");
      socket.on("data", async data => {
        let position;
        if (data.indexOf("$") >= -1) {
          position = data.split("$")[0];
        } else {
          position = data.split("\r")[0];
        }
        new Worker.run(position)
      });

      socket.on("error", function() {
        console.log("\n Cliente desconectao por erro ");
      });
    })
    .listen(process.env.PORT_LISTENER);

  console.log("#SERVICE ... LISTENER");
};

module.exports = listener;
