const express = require("express");
const router = express.Router();
//
const data = require("../data/data");


router.get("/emiliano", (req, res)=>{
    res.render("emiliano",{
        movies: data
    }); 
 });

 module.exports = router;