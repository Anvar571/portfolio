const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("blogs")
})

module.exports = router