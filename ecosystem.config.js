module.exports = {
  apps: [
    {
      name: "listener",
      script: "src/index.js",
      instances: "1",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        TZ: "America/Bahia",
        NODE_ENV: "production",
      },
    },
  ],
};
