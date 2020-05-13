const protocols = require("../protocols");
const Position = require("../models/Position");

let Protocol = async (data) => {
  if (data) {
    let str_data;

    if (data[0] == "+" || !isNaN(data[0])) str_data = data.split(",");
    else str_data = data.split(";");

    let position;

    // XEXUN
    if (!isNaN(str_data[0])) {
      position = await protocols.XEXUN(str_data);
      if (position.imei.length != 15) return;
    }

    switch (str_data[0]) {
      // SUNTECH
      case "ST300STT":
        position = await protocols.ST300STT(str_data);
        break;
      case "ST300ALT":
        position = protocols.ST300ALT(str_data);
        break;
      case "ST300EMG":
        position = protocols.ST300EMG(str_data);
        break;
      case "ST300EVT":
        position = protocols.ST300EVT(str_data);
        break;
      case "ST300UEX":
        position = protocols.ST300UEX(str_data);
        if (position.ignition) position.evt = "DRIVER_ON";
        else position.evt = "DRIVER_OFF";
        break;
      // QUECKLINK
      case "+RESP:GTFRI":
        position = protocols.RESPGTFRI(str_data);
        break;
      case "+RESP:GTMPF":
        position = protocols.RESPGTMPF(str_data);
        break;
      case "+RESP:GTSTC":
        position = protocols.RESPGTSTC(str_data);
        break;
      case "+RESP:GTIGF":
        position = protocols.RESPGTIGF(str_data);
        break;
      case "+RESP:GTIGN":
        position = protocols.RESPGTIGN(str_data);
        break;
      // QUECKLINK BUFF
      case "+BUFF:GTFRI":
        position = protocols.RESPGTFRI(str_data);
        break;
      case "+BUFF:GTMPF":
        position = protocols.RESPGTMPF(str_data);
        break;
      case "+BUFF:GTSTC":
        position = protocols.RESPGTSTC(str_data);
        break;
      case "+BUFF:GTIGF":
        position = protocols.RESPGTIGF(str_data);
        break;
      case "+BUFF:GTIGN":
        position = protocols.RESPGTIGN(str_data);
        break;
      // RST
      case "RST":
        position = protocols.RST(str_data);
        break;
      default:
        break;
    }
    return position;
  }
};

module.exports = Protocol;
