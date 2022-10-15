const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("skill")
    } catch (error) {
        res.render("skill", {error_message: error+""})
    }
} )

module.exports = router