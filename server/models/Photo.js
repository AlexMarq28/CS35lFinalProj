const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a schema
const PhotoSchema = new Schema({
  photoLocation: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
  },
  photoCaption: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Photo = mongoose.model("photo", PhotoSchema);
