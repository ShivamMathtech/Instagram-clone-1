const express = require("express");
const instagramRoute = express.Router();
instagramRoute.get("/", (req, res) => {
  let frontEndPath = __dirname.slice(0, -8);
  res.sendFile(frontEndPath + "/frontend/loginpage.html");
});

module.exports = instagramRoute;
