const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    repoName:{type:String , required:true},
    categories:[String]
  },
  { id: true, timestamps: true }
);


const projectsModel = mongoose.model("projects", projectsSchema);
module.exports = projectsModel;
