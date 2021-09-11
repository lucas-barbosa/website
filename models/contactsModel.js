const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, _id: true }
);

const contactModel = mongoose.model("contacts", contactSchema);
module.exports = contactModel;
