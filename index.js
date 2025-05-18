const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter.js");
const newMessageRouter = require("./routes/newMessage");
const detailsRouter = require("./routes/detailsRouter");
const path = require('path');
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter.indexRouter);
app.use("/new", newMessageRouter);
app.use("/details", detailsRouter);

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`My first Express app - listening on port ${PORT}!`);
});