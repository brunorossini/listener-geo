var redis = require("redis");
var publisher = redis.createClient();

publisher.sendMessage = async msg => {
  publisher.publish("position", msg, function(data) {
    console.log(data);
    return data;
  });
};

module.exports = publisher;
