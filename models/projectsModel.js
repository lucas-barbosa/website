const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    github_watcher_count_link: { type: String, required: true },
    github_link: { type: String, required: true },
    github_stars_count_link: { type: String, required: true },
    language: { type: String, required: true },
    languages_percentage: { type: Number, required: true},
    categories:[String]
  },
  { id: true, timestamps: true }
); // we add more when configure some thing

const projectsModel = mongoose.model("projects", projectsSchema, "main");
module.exports = projectsModel;
