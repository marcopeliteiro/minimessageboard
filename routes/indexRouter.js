const {Router} = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));

// quando dou export de múltiplos valores, depois tenho de ter cuidado no require 
module.exports = {indexRouter, messages};