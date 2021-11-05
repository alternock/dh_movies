const path = require("path");
const express = require("express");
const app = express();
//import controllers
const genericCTRL = require("./controllers/generic_ctrl");
const alejandro_ctrl = require("./controllers/alejandro_ctrl");
const emilianoCTRL = require("./controllers/emiliano_ctrl");
const fianrielCTRL = require("./controllers/fianriel_ctrl");
const dominicCTRL = require("./controllers/dominic_ctrl");
const midocCTRL = require("./controllers/midoc_ctrl");
const aboutCTRL = require("./controllers/about_ctrl");
const felipeCTRL = require("./controllers/felipe_ctrl");
const shopCTRL = require("./controllers/shop_ctrl");
const productsCTRL = require("./controllers/products.ctrl");
//
const ENDPOINTS = require("./endpoints/endpoints");

//PORT
const PORT = process.env.PORT || 3000;

//CONFIG
app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));


//ENDPOINTS
app.use(ENDPOINTS.GENERIC, genericCTRL);
app.use(ENDPOINTS.ABOUT, aboutCTRL);
app.use(ENDPOINTS.PRODUCTS, productsCTRL);
app.use(ENDPOINTS.SHOP, shopCTRL);
app.use(ENDPOINTS.DOMINIC, dominicCTRL);
app.use(ENDPOINTS.MIDOC, midocCTRL);
app.use(ENDPOINTS.FIANRIEL, fianrielCTRL);
app.use(ENDPOINTS.EMILIANO, emilianoCTRL);
app.use(ENDPOINTS.ALEJANDRO, alejandro_ctrl);
app.use(ENDPOINTS.FELIPE, felipeCTRL);

//404
app.get("*",(req, res, next)=>{
  res.render("404");
})


//START SERVER
app.listen(PORT, ()=>{
    console.log("start server");
})