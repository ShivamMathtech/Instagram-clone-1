const { mongoose } = require("../config/db");

let UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
// Define the schema
const Instagramdb = mongoose.model("Instagramdb", UserSchema);
module.exports = Instagramdb;
