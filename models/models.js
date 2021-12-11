const mongoose = require("mongoose");

const restaurantsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  images: {
    urls: [String],
  },
});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;
