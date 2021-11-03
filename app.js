const path = require("path");
const express = require("express");
const app = express();
//
const genericCTRL = require("./controllers/generic_ctrl");
<<<<<<< HEAD
const emilianoCTRL = require("./controllers/emiliano_ctrl");
const fianrielCTRL = require("./controllers/fianriel_ctrl");
const dominicCTRL = require("./controllers/dominic_ctrl");
const midocCTRL = require("./controllers/midoc_ctrl");
=======

const emilianoCTRL = require("./controllers/emiliano_ctrl");

const fianrielCTRL = require("./controllers/fianriel_ctrl");
>>>>>>> 12965d65b256e12e89b12ea00365203db7642f56

const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", genericCTRL);
app.use("/dominic", dominicCTRL);
app.use("/midoc", midocCTRL);

app.use("/fianriel", fianrielCTRL);

app.use("/emiliano", emilianoCTRL);

app.listen(PORT, ()=>{
    console.log("start server");
})