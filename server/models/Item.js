const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
   author: {
    type: String,
    required: true,
   description: {
    type: String,
    required: true,
  },
   likes: {
       type: Integer,
       default: 0,
   },
     numSessions: {
       type: Integer,
       defualt: 0,
   },
     photo: {
       type: photoSchema,
       required: true,
      }
     
     );
   


module.exports = Item = mongoose.model("item", ItemSchema);
