const redis = require("redis");

const pub = redis.createClient();

const setOnline = (tracker_id, position) => {
  const key = `online:${tracker_id}`;
  pub.set(key, JSON.stringify(position));
  pub.expire(key, 60 * 60);
};

module.exports = { setOnline };
