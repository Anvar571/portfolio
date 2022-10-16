const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("skill")
})

module.exports = router