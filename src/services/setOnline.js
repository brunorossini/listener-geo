const redis = require("redis");

const pub = redis.createClient();

const setOnline = (tracker_id, position) => {
  pub.get(`offline:${tracker_id}`, (err, reply) => {
    if (reply) pub.del(`offline:${tracker_id}`);
  });

  const key = `online:${tracker_id}`;
  pub.set(key, JSON.stringify(position));
  pub.expire(key, 60 * 60);
};

module.exports = { setOnline };
