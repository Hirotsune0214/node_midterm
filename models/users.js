const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

module.exports = {
  userSchema,
  usersModel: mongoose.model("users", userSchema),
};
