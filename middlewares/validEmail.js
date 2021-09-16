// midllware for validating the email;
const { isEmail } = require("validator").default;
const subscribersModel = require("../models/subscribersModel");

const emailValidator = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const email = req.body.email;
  if (isEmail(email) && email?.trim().length  < 100) {
    /* check email already exists
    */ 
    subscribersModel.exists({ email })
      .then(value => {
        if(!value) return next();
        res.status(406).send("Email Already Exists");
      })
  } else {
    res.status(407).send("Email is invalid");
  }
};

module.exports = emailValidator;
