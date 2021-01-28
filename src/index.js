require("dotenv").config();
let listener = require("./services/listener");
let listenerUDP = require("./services/udp");
const { KeyExpire } = require("./services/KeyExpire");

listener();
listenerUDP();
new KeyExpire();
