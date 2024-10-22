const Instagramdb = require("../model/instagramUser");

const registerCtrls = (req, res) => {
  console.log(req.body);
  // logic for registration goes here
  Instagramdb.findOne({ email: req.body.email })
    .then((user) => {
      const intaUser = new Instagramdb(req.body);
      intaUser
        .save()
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {});
};

module.exports = registerCtrls;
