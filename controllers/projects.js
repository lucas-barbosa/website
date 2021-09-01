const projectsModel = require("../models/projectsModel");

const get_all_projects = (req, res) => {
  projectsModel
    .find()
    .then((projects) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.error(err.message);
      res.setHeader("Content-Type", "text/plain");
      res.status(500).send(err.message);
    });
};

const get_by_category = (req, res) => {
  const category = req.params.category;
  console.log(category);

  projectsModel
    .find({categories:category})
    .then((projects) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.error(err.message);
      res.setHeader("Content-Type", "text/plain");
      res.status(500).send(err.message);
    });
};

module.exports = {
  get_all_projects,
  get_by_category
};
