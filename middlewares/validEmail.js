// midllware for validating the email;
const { isEmail } = require("validator").default;
const subscribersModel = require("../models/subscribersModel");

const emailValidator = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const email = req.body.email;
  if (isEmail(email) && email?.trim().length  < 100) {
    if (!subscribersModel.exists({ email })) {
      return next();
    } else {
      res.status(406).send("Email already exists");
    }
  } else {
    res.status(407).send("Email is invalid");
  }
};

module.exports = emailValidator;
