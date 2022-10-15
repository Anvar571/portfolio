const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("home")
    } catch (error) {
        res.render("home", {error_message: error+""})
    }
})

module.exports = router