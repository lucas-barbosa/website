const express = require('express');
const emailValidator = require("../middlewares/validContactMessage");
const contactsController = require("../controllers/contacts");

const contactsRouter = express.Router();

contactsRouter.put("/",emailValidator, contactsController.put_contact_message);

module.exports = contactsRouter;