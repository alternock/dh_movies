const express = require("express");
const router = express.Router();

router.get("/:name", (req, res)=>{
    const name = req.params.name;

    res.render("products", {
        product: name
    });
});

module.exports = router;