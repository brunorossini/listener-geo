let Protocol = require("./Protocol");
let Store = require("./Store");

class Worker {
  async run(position, io) {
    position = await Protocol(position);
    // Debug(position);
    if (position && position.date) Store(position, io);
  }
}

module.exports = new Worker();
