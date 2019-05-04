const mongoose = require("mongoose")

// Create Schema
const PaySchema = new mongoose.Schema({
 TO:{
     type:String
 },
 From:{
     type:String
 },
  Amount:{
      type:String
  }
,
Comment:{
type:String
},
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Payment = mongoose.model("payments", PaySchema);
