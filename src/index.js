require("dotenv").config();
let listener = require("./services/listener");
let listenerUDP = require("./services/udp");

require("events").EventEmitter.defaultMaxListeners = 99999;

listener();
listenerUDP();
