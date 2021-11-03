const path = require("path");
const express = require("express");
const app = express();
//
const genericCTRL = require("./controllers/generic_ctrl");
const alejandro_ctrl = require("./controllers/alejandro_ctrl");

const PORT = process.env.PORT || 3000;

app.set("views", path.resolve(__dirname, "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", genericCTRL);


app.use("/alejandro", alejandro_ctrl);

app.listen(PORT, ()=>{
    console.log("start server");
})