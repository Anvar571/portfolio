const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("project")
    } catch (error) {
        res.render("project", {error_message: error+""})
    }
})

module.exports = router