const routers = require("express").Router();

routers.use("/", require("./HomeRoute"))

module.exports = routers