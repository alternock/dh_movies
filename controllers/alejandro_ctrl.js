const express = require("express");
const router = express.Router();
//
const data = require("../data/data");

router.get("/", (req, res)=>{
    res.render("alejandro",{
        movies: data
    }); 
 });

 module.exports = router;