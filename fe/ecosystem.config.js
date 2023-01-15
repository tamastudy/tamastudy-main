module.exports = {
  apps: [
    {
      name: "my-app",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
