// this file for projects categories
const categoriesModel = require("../models/categoriesModel");

const get_all_categories = (req, res) => {
  categoriesModel
    .find()
    .then((categories) => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error(err.message);
      res.setHeader("Content-type", "text/plain");
      res.status(500).send(err.message);
    });
};

module.exports = {
  get_all_categories,
};
