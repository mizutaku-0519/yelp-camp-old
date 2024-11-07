const mongoose = require("mongoose");
const { Scheme } = mongoose;

const campgroundScheme = new Scheme({
  title: String,
  imageUrl: String,
  price: Number,
  description: String,
  location: String,
});

const Campground = mongoose.model("Campground", campgroundScheme);

module.exports = Campground;
