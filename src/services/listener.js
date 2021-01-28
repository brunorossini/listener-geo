const net = require("net");
let Worker = require("../jobs/Worker");
const carrier = require("carrier");
const io = require("socket.io")(9999);

let listener = function () {
  net
    .createServer((socket) => {
      socket.setEncoding("utf8");
      socket.on("data", async (data) => {
        if (data.indexOf("205796570") !== -1) console.log(0, data);
        // console.log({ data })
        /// if (data.indexOf("907142244") !== -1) console.log('placa:MOY-3A78', data);
	      /// if (data.indexOf("907142225") !== -1) console.log('placa:MTY-8832', data);
        let position;
        if (data.indexOf("$") >= -1) {
          position = data.split("$")[0];
          Worker.run(position, io);
        } else {
          positions = data.split("\n");
          positions.map((position) => Worker.run(position));
        }
      });

      socket.on("error", function (err) {
        // console.error("Connection error: " + err);
        console.log("\n Cliente desconectao por erro ");
      });
    })
    .listen(process.env.PORT_LISTENER);

  console.log("#SERVICE ... LISTENER");
};

module.exports = listener;
