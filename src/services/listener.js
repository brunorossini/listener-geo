const net = require("net");
let Protocol = require("../jobs/Protocol");
let Store = require("../jobs/Store");
let Debug = require("../jobs/Debug");

let listener = function() {
  net
    .createServer(socket => {
      socket.setEncoding("utf8");
      socket.on("data", async data => {
        let position;
        if (data.indexOf("$") >= -1) {
          position = data.split("$")[0];
          console.log(position);
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

// let position =
//   "+RESP:GTMPF,3C0303,862045030440699,,0,0.0,163,542.6,-40.659385,-20.362605,20190725205957,0724,0011,18B7,422E,00,20190725205958,0A9F";
// "ST300ALT;007265506;40;313;20190726;13:35:45;59302;-20.362726;-040.659288;000.000;165.24;9;1;130;0.00;000000;9;000019;3.7;0";
//   "ST300STT;007265506;40;313;20190720;02:11:45;59351;-20.362696;-040.659236;000.000;000.00;8;1;91;0.00;000000;1;2888;000015;3.8;0";
// "+RESP:GTIGN,3C0303,862045030440699,,578,0,0.0,110,541.4,-40.659405,-20.362407,20190726122709,0724,0011,18B7,422E,00,,882.2,20190726121345,0ABA$";
// "+RESP:GTIGF,3C0303,862045030440699,,70,0,0.0,110,541.4,-40.659405,-20.362407,20190726120404,0724,0011,18B7,422E,00,,882.2,20190726120407,0AB7$";
// "+RESP:GTFRI,3C0303,862045030440699,,12776,10,1,2,0.0,163,546.2,-40.659360,-20.362487,20190726114001,0724,0011,18B7,422E,00,882.2,,,,100,210100,,,,20190726114014,0AAA$";
// "+RESP:GTFRI,3C0303,862045030440699,,12073,10,1,3,93.0,0,525.8,-40.659435,-20.362346,20190723140229,0724,0011,18B7,2AE5,00,882.2,,,,81,210100,,,,20190722140243,01A7$";
// "+RESP:GTFRI,3C0303,862045030440699,,12501,10,1,5,0.0,129,552.5,-40.659185,-20.362609,20190722183734,0724,0011,18B7,422E,00,882.2,,,,100,110000,,,,20190722183749,0379";
// "ST300STT;007265506;40;313;20190718;20:19:00;59302;-20.362400;-040.659373;000.000;094.15;7;1;0;14.07;100000;1;0344;000002;4.1;1";

// const Position = require("../models/Position");
// Position.sync({ force: true });

// setInterval(() => {
// position = Protocol(position);
//   position = {
//     header: "+RESP:GTFRI",
//     firmware: "3C0303",
//     imei: "862045030440699",
//     device_model: "",
//     power_voltage: 12.073,
//     report_id: "10",
//     satt: "3",
//     speed: "93.0",
//     angle: "0",
//     altitude: "525.8",
//     lng: "-40.659435",
//     lat: "-20.362346",
//     date: "2019-07-23",
//     time: "14:02:29",
//     mcc: "0724",
//     mcn: "0011",
//     lac: "18B7",
//     cell_id: "2AE5",
//     odometer: 882.2,
//     hour_meter: "",
//     battery_voltage: "81",
//     device_status: "210100",
//     ignition: true,
//     input1: false,
//     output1: false,
//     output2: false,
//     send_time: "20190722140243",
//     count_number: "01A7$"
//   };
//   Debug(position);

// Store(position);
// }, 1000);

module.exports = listener;
