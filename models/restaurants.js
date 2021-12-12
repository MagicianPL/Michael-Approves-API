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
    required: false,
  },
  rating: {
    type: Number,
    required: true,
  },
  images: {
    urls: [String],
    required: false,
  },
  contact: {
    address: String,
    phone: String,
    required: false,
  },
});

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
