const express = require("express");
const { registerUser, loginUser } = require("../Controllers/AuthController");

const AuthRouter = express.Router();


// Router for registration
AuthRouter.post("/register", registerUser);
// Router for Login
AuthRouter.post("/login", loginUser);


module.exports = AuthRouter;