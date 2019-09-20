const ST300STT = require("../protocols/ST300STT");
const ST300ALT = require("../protocols/ST300ALT");
const ST300EMG = require("../protocols/ST300EMG");
const ST300EVT = require("../protocols/ST300EVT");
const ST300UEX = require("../protocols/ST300UEX");
const RESPGTFRI = require("../protocols/RESPGTFRI");
const RESPGTMPF = require("../protocols/RESPGTMPF");
const RESPGTSTC = require("../protocols/RESPGTSTC");
const RESPGTIGF = require("../protocols/RESPGTIGF");
const RESPGTIGN = require("../protocols/RESPGTIGN");

let Protocol = data => {
  let str_data;
  if (data[0] == "+") str_data = data.split(",");
  else str_data = data.split(";");

  let position;
  switch (str_data[0]) {
    // SUNTECH
    case "ST300STT":
      position = ST300STT(str_data);
      break;
    case "ST300ALT":
      position = ST300ALT(str_data);
      break;
    case "ST300EMG":
      position = ST300EMG(str_data);
      break;
    case "ST300EVT":
      position = ST300EVT(str_data);
      break;
    case "ST300UEX":
      position = ST300UEX(str_data);
      break;
    // QUECKLINK
    case "+RESP:GTFRI":
      position = RESPGTFRI(str_data);
      break;
    case "+RESP:GTMPF":
      position = RESPGTMPF(str_data);
      break;
    case "+RESP:GTSTC":
      position = RESPGTSTC(str_data);
      break;
    case "+RESP:GTIGF":
      position = RESPGTIGF(str_data);
      break;
    case "+RESP:GTIGN":
      position = RESPGTIGN(str_data);
      break;
    // QUECKLINK BUFF
    case "+BUFF:GTFRI":
      position = RESPGTFRI(str_data);
      break;
    case "+BUFF:GTMPF":
      position = RESPGTMPF(str_data);
      break;
    case "+BUFF:GTSTC":
      position = RESPGTSTC(str_data);
      break;
    case "+BUFF:GTIGF":
      position = RESPGTIGF(str_data);
      break;
    case "+BUFF:GTIGN":
      position = RESPGTIGN(str_data);
      break;
    default:
      break;
  }
  return position;
};

module.exports = Protocol;
