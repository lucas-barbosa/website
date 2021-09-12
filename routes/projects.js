const express = require('express');
const projectsController = require("../controllers/projects");

const projectsRouter = express.Router();

projectsRouter.get("/",projectsController.get_all_projects);
projectsRouter.get("/:category",projectsController.get_by_category);

module.exports = projectsRouter;