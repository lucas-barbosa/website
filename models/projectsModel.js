const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    github_link: {
      type: String,
      required: true,
    },
  },
  { id: true, timestamps: true }
); // we add more when configure some thing

const projectsModel = mongoose.model("projects",projectsSchema,"main");
module.exports = projectsModel;