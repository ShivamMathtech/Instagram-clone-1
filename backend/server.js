const express = require("express");
const app = express();
const env = require("dotenv");
const instagramRoute = require("./routes/instagramRoute");
const authRoute = require("./routes/auth/authRoute");
env.config();
app.use(express.json());
app.use(express.static("frontend"));
app.use("/", instagramRoute);
app.use("/auth", authRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
