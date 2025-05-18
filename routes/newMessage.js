const {Router} = require("express");
const index = require("./indexRouter.js");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("form",));

newMessageRouter.post("/", (req,res) => {
    let user = req.body.user;
    let message = req.body.message;
    index.messages.push({ text: message, user: user, added: new Date()});
    res.redirect("/");
});

module.exports = newMessageRouter;