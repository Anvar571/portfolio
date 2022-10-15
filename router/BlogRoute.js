const router = require("express").Router();

router.get("/", (req, res) => {
    try {
        res.render("blogs")
    } catch (error) {
        res.render("blogs", {error_message: error+""})
    }
} )

module.exports = router