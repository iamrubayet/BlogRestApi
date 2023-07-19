const authRouter = require("express").Router();
const {signup, login} = require("../../controllers/authControllers/signUp");

authRouter.post("/signup",signup);
authRouter.post("/login",login);


module.exports = authRouter;