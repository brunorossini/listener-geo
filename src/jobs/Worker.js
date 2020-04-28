let Protocol = require("./Protocol");
let Store = require("./Store");

class Worker {
  async run(position) {
    position = await Protocol(position);
    // Debug(position);
    if (position && position.date) Store(position);
  }
}

module.exports = Worker