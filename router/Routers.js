const routers = require("express").Router();

routers.use("/", require("./HomeRoute"))

routers.all('*', (req, res) => {
    res.render('404');
});

module.exports = routers