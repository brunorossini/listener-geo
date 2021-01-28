const redis = require("redis");

const pub = redis.createClient();
const sub = redis.createClient();

const setOnline = (tracker_id, position) => {
  pub.get(`offline:${tracker_id}`, (err, reply) => {
    if (reply) pub.del(`offline:${tracker_id}`);
  });

  const key = `online:${tracker_id}`;
  pub.set(key, JSON.stringify(position));
  pub.expire(key, 60 * 60);
};

class KeyExpire {
  constructor() {
    pub.send_command(
      "config",
      ["set", "notify-keyspace-events", "Ex"],
      this.SubscribeExpired
    );
  }

  SubscribeExpired() {
    const key = `__keyevent@0__:expired`;

    sub.subscribe(key, () => {
      console.log(`__keyevent expired started`);
      sub.on("message", function (chan, msg) {
        console.log("[expired]", msg);
      });
    });
  }
}

module.exports = { KeyExpire, setOnline };
