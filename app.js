const path = require("path");
const express = require("express");
const app = express();
//
const genericCTRL = require("./controllers/generic_ctrl");

const emilianoCTRL = require("./controllers/emiliano_ctrl");

const fianrielCTRL = require("./controllers/fianriel_ctrl");

const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", genericCTRL);
app.use("/dominic", dominic_ctrl);
app.use("/midoc", midoc_ctrl);

app.use("/fianriel", fianrielCTRL);

app.use("/emiliano", emilianoCTRL);

app.listen(PORT, ()=>{
    console.log("start server");
})