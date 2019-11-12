require("dotenv").config();
let listener = require("./services/listener");
let listenerUDP = require("./services/udp");

listener();
listenerUDP();

// const moment = require("moment");
// const dateFns = require("date-fns");
// const Teste = require("./models/Teste");
// const date = moment(20191106162615, "YYYYMMDDHHmmss").subtract({ hours: 3 });

// // console.log(new Date(20191106162615));

// // const formatDate = datesrt => {
// //   let year = datesrt.substring(0, 4);
// //   let month = datesrt.substring(4, 6);
// //   let day = datesrt.substring(6, 8);
// //   let hour = datesrt.substring(8, 10);
// //   let minute = datesrt.substring(10, 12);
// //   let second = datesrt.substring(12, 14);
// //   return new Date(year, month, day, hour, minute, second);
// // };

// // console.log(formatDate(`20191106162615`));
// // const parsedDate = dateFns.parseISO(, "yyyyMMddHHmmss");
// // const znDate = dateFns.zonedTimeToUtc(parsedDate, "America/Sao_Paulo");
// // console.log(parsedDate);
// Teste.create({ hora: date });
