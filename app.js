const path = require("path");
const express = require("express");
const app = express();
//
const genericCTRL = require("./controllers/generic_ctrl");
const alejandro_ctrl = require("./controllers/alejandro_ctrl");
const emilianoCTRL = require("./controllers/emiliano_ctrl");
const fianrielCTRL = require("./controllers/fianriel_ctrl");
const dominicCTRL = require("./controllers/dominic_ctrl");
const midocCTRL = require("./controllers/midoc_ctrl");
const aboutCTRL = require("./controllers/about_ctrl");
<<<<<<< HEAD
const felipeCTRL = require("./controllers/felipe_ctrl");
=======
<<<<<<< HEAD
const shopCTRL = require("./controllers/shop_ctrl");
=======
const productsCTRL = require("./controllers/products.ctrl");
//endpoint
const ENDPOINTS = require("./endpoints/endpoints");
>>>>>>> 1edf2536f6b4e4931d67b20a4837766fca3193da
>>>>>>> f545effc5a7550b757e31ea864f39a047d37eacb

const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

<<<<<<< HEAD
app.use("/", genericCTRL);
app.use("/about", aboutCTRL);
app.use("/dominic", dominicCTRL);
app.use("/midoc", midocCTRL);
app.use("/fianriel", fianrielCTRL);
app.use("/emiliano", emilianoCTRL);
app.use("/alejandro", alejandro_ctrl);
<<<<<<< HEAD
app.use("/felipe", felipeCTRL);
=======
app.use("/shop", shopCTRL);
=======
app.use(ENDPOINTS.GENERIC, genericCTRL);
app.use(ENDPOINTS.ABOUT, aboutCTRL);
app.use(ENDPOINTS.PRODUCTS, productsCTRL);
app.use(ENDPOINTS.DOMINIC, dominicCTRL);
app.use(ENDPOINTS.MIDOC, midocCTRL);
app.use(ENDPOINTS.FIANRIEL, fianrielCTRL);
app.use(ENDPOINTS.EMILIANO, emilianoCTRL);
app.use(ENDPOINTS.ALEJANDRO, alejandro_ctrl);
>>>>>>> 1edf2536f6b4e4931d67b20a4837766fca3193da
>>>>>>> f545effc5a7550b757e31ea864f39a047d37eacb

app.get("*",(req, res, next)=>{
  res.render("404");
})

app.listen(PORT, ()=>{
    console.log("start server");
})