const moment = require("moment");

module.exports = data => {
  return {
    header: data[0],
    firmware: data[1],
    imei: data[2],
    device_model: data[3],
    satt: data[4],
    speed: data[5],
    angle: data[6],
    altitude: data[7],
    lng: data[8],
    lat: data[9],
    date: moment(data[10], "YYYYMMDDHHmmss")
      .format("YYYY-MM-DD")
      .toString(),
    time: moment(data[10], "YYYYMMDDHHmmss").format("HH:mm:ss"),
    mcc: data[11],
    mcn: data[12],
    lac: data[13],
    cell_id: data[14],
    //field15 reserved
    send_time: data[16],
    count_number: data[17]
  };
};
