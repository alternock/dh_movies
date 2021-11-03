const express = require("express");
const router = express.Router();
//
const data = require("../data/data");

router.get("/", (req, res)=>{
    res.render("fianriel",{
        movies: data
    }); 
 });

 module.exports = router;