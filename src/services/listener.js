const net = require("net");
let Worker = require("../jobs/Worker");

let listener = function () {
  net
    .createServer((socket) => {
      socket.setEncoding("utf8");
      socket.on("data", async (data) => {
        if (data.indexOf("007503739") !== -1) console.log(data);
        let position;
        if (data.indexOf("$") >= -1) {
          position = data.split("$")[0];
          Worker.run(position);
        } else {
          positions = data.split("\r");
          positions.map((position) => Worker.run(position));
        }
      });

      socket.on("error", function (err) {
        console.error("Connection error: " + err);
        console.log("\n Cliente desconectao por erro ");
      });
    })
    .listen(process.env.PORT_LISTENER);

  console.log("#SERVICE ... LISTENER");
};

module.exports = listener;
