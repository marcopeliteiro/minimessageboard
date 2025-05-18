const {Router} = require("express");

const detailsRouter = Router();

detailsRouter.get("/:user/:message/:date", (req,res) => res.render("details", {user:req.params.user,message:req.params.message,date:req.params.date} ));

module.exports = detailsRouter;