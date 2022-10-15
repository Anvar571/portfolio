const routers = require("express").Router();

routers.use("/", require("./HomeRoute"))
routers.use("/about", require("./AboutRoute"))
routers.use("/blog", require("./BlogRoute"))
routers.use("/project", require("./ProjectRoute"))
routers.use("/skill", require("./SkillRoute"))
routers.use("/contact", require("./ContactRoute"))

routers.use((req, res, next) => {
    res.render('404');
    next()
});

module.exports = routers