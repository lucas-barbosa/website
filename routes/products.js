const express = require('express');
const productsController = require("../controllers/products");

const productsRouter = express.Router();

productsRouter.get('/', productsController.get_all_products);

module.exports = productsRouter;