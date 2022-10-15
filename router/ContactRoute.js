const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("contact")
    } catch (error) {
        res.render("contact", {error_message: error+""})
    }
} )

module.exports = router