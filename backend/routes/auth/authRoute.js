const express = require("express");
const loginCtrls = require("../../controller/loginCtrls");
const registerCtrls = require("../../controller/registerCtrls");
const authRoute = express.Router();
authRoute.post("/login", loginCtrls);

authRoute.post("/signup", registerCtrls);

module.exports = authRoute;
