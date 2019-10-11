const moment = require("moment");

module.exports = data => {
  return {
    header: data[0],
    firmware: data[1],
    imei: data[2],
    device_model: data[3],
    ignition_duration: data[4],
    satt: data[5],
    speed: data[6],
    angle: data[7],
    altitude: data[8],
    lng: data[9],
    lat: data[10],
    date: moment(data[11], "YYYYMMDDHHmmss"),
    // date: moment(data[11], "YYYYMMDDHHmmss")
    //   .format("YYYY-MM-DD")
    //   .toString(),
    // time: moment(data[11], "YYYYMMDDHHmmss").format("HH:mm:ss"),
    mcc: data[12],
    mcn: data[13],
    lac: data[14],
    cell_id: data[15],
    // field16 reserved
    hour_meter: data[17],
    odometer: parseFloat(data[18]),
    send_time: data[19],
    count_number: data[20],
    ignition: true
  };
};
