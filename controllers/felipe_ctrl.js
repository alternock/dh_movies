const express = require("express");
const router = express.Router();
//


router.get("/", (req, res)=>{
 res.render("felipe", {
    menu:"about"
});
});

 module.exports = router;