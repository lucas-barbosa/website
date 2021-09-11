// this file for projects categories
const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    maxLength: 10,
    unique: true,
  },
  projectsCount: {
    type: String,
    required: true,
  },
});

const categoriesModel = mongoose.model("Categories", categoriesSchema);

module.exports = categoriesModel;
