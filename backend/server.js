const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
const instagramRoute = require("./routes/instagramRoute");
const authRoute = require("./routes/auth/authRoute");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
env.config();
app.use(express.json());
app.use(express.static("frontend"));
app.use("/", instagramRoute);
app.use("/auth", authRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
