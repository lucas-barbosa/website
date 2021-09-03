// midllware for validating the email;
const { isEmail } = require("validator").default;
const subscribersModel = require("../models/subscribersModel");

const emailValidator = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const email = req.body.email;
  if (isEmail(email)) {
    if (subscribersModel.exists({ email })) {
      return next();
    } else {
      res.status(406).json({ error: "Email already exists" });
    }
  } else {
    res.status(406).json({ error: "Email is invalid" });
  }
};

module.exports = emailValidator;
