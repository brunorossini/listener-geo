require("dotenv").config();
let listener = require("./services/listener");
let listenerUDP = require("./services/udp");

listener();
listenerUDP();
