const mongoose = require("mongoose")

// Create Schema
const DepositSchema = new mongoose.Schema({
  AccountNumber:{
      type:Number
  },
  AccountName:{

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

module.exports = Deposit = mongoose.model("deposits", DepositSchema);
