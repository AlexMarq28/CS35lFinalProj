const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    type: Date,
    default: Date.now,
  },
  email: {
   email: {
    type: String,
  },
   author: {
    type: String,
    required: true,
   description: {
    type: String,
    required: true,
  },
});
   likes: {
       type: Integer,
       default: 0,
   },
   numSessions: {
       type: Integer,
       default: 0,
   },
     picture: {
       type: String,
       required: true,
     },
     tags: [{
	 type: String
     }],


   });



module.exports = Item = mongoose.model("item", ItemSchema);
