const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("shop", {
        menu:"about"
    });
});

 module.exports = router;