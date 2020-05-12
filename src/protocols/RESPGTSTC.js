const moment = require("moment");

module.exports = (data) => {
  return {
    header: data[0],
    firmware: data[1],
    imei: data[2],
    device_model: data[3],
    //field4 reserved
    satt: data[5],
    speed: parseInt(data[6]),
    angle: parseInt(data[7]),
    altitude: parseInt(data[8]),
    lng: data[9],
    lat: data[10],
    date: moment.utc(data[11], "YYYYMMDDHHmmss"),
    // date: moment(data[11], "YYYYMMDDHHmmss")
    //   .format("YYYY-MM-DD")
    //   .toString(),
    // time: moment(data[11], "YYYYMMDDHHmmss").format("HH:mm:ss"),
    mcc: data[12],
    mcn: data[13],
    lac: data[14],
    cell_id: data[15],
    //field15 reserved
    send_time: data[17],
    count_number: data[18],
    sleep_mode: true,
  };
};
