const Instagramdb = require("../model/instagramUser");

const loginCtrls = (req, res) => {
  // Implement login logic here
  Instagramdb.findOne({ email: req.body.email })
    .then((d) => {
      if (!d) {
        return res.status(401).json({ message: "Invalid credentials" });
      } else {
        let yourPswd = req.body.password;
        let dbPswd = d.password;
        if (dbPswd === yourPswd) {
          res.status(200).json({
            user: d,
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    })
    .catch((e) => {
      res.status(404).json({ message: "User not found" });
    });
};

module.exports = loginCtrls;
