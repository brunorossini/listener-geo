const Redis = require("ioredis");

class Cache {
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      keyPrefix: "cache:",
    });
  }

  set(key, value) {
    return this.redis.set(key, JSON.stringify(value), "EX", 60 * 60 * 24);
  }

  async get(key) {
    const cached = await this.redis.get(key);

    return cached ? JSON.parse(cached) : null;
  }

  invalidate(key) {
    return this.redis.del(key);
  }

  async invalidatePreffix(prefix) {
    const keys = await this.redis.keys(`cache:${prefix}:*`);

    const pipeline = this.redis.pipeline();

    keys.forEach((key) => pipeline.del(key));

    await pipeline.exec();
  }
}

module.exports = new Cache();
