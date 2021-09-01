// this file for projects categories
const express = require('express');
const categoriesController = require("../controllers/categories");

const categoriesRouter = express.Router()

categoriesRouter.get("/", categoriesController.get_all_categories);

module.exports = categoriesRouter;