const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("about")
    } catch (error) {
        res.render("about", {error_message: error+""})
    }
} )

module.exports = router