const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: BinData,
    
  },
  num_uses: {
    type: Integer,
    required: true,
 
  
  
});

module.exports = Item = mongoose.model("item", ItemSchema);
