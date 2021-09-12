const productsModel = require("../models/productsModel");

const get_all_products = (req, res) => {
  productsModel
    .find()
    .then((products) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(products);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "text/plain");
      res.status(500).send(err.message);
    });
};

module.exports = {
  get_all_products,
};