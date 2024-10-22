const express = require("express");
const loginCtrls = require("../../controller/loginCtrls");
const registerCtrls = require("../../controller/registerCtrls");
const forgetPassword = require("../../controller/forgetPswd");
const authRoute = express.Router();
authRoute.post("/login", loginCtrls);
authRoute.post("/signup", registerCtrls);
authRoute.post("/forgetPassword", forgetPassword);

module.exports = authRoute;
