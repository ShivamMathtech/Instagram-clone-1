const user = require("../model/instagramUser");

const registerCtrls = (req, res) => {
  // logic for registration goes here
  console.log(req.body);
  user
    .findOne({ email: req.body.email })
    .then((user) => {
      if (!user.length) {
        res.status(400).json({ msg: "User already exists" });
      } else {
        const instagramUser = new user(req.body);
        instagramUser
          .save()
          .then((data) => {
            mas: "success";
            res.json({ msg: "User registered successfully" });
          })
          .catch((err) => {
            res.status(500).json({ msg: err.message });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};

module.exports = registerCtrls;
