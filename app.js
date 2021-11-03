const path = require("path");
const express = require("express");
const app = express();
//
const genericCTRL = require("./controllers/generic_ctrl");
const emilianoCTRL = require("./controllers/emiliano_ctrl");

const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", genericCTRL);

app.use("/emiliano", emilianoCTRL);

app.listen(PORT, ()=>{
    console.log("start server");
})