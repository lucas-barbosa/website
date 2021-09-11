const express = require('express');
const emailValidator = require("../middlewares/validEmail");
const subscribersController = require("../controllers/subscribers");

const subscribersRouter = express.Router();

subscribersRouter.put("/",emailValidator, subscribersController.put_new_subscriber);

module.exports= subscribersRouter;