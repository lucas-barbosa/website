const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique:true 
    },
  },
  { id: true, timestamps: true }
);


const subscribersModel = mongoose.model("subscribers", subscribersSchema);
module.exports = subscribersModel;