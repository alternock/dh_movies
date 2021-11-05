const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("about", {
        menu:"about"
    });
});

router.get("/private", (req, res)=>{
   res.render("about_private");
});

module.exports = router;