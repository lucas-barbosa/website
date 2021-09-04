// middleware for checking the contact message is valid
const { isEmail } = require("validator");

const contactValidator = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  const { email, username, subject, message } = req.body;
  const errors = {
    exists: false,
    message: "",
    username: "",
    subject: "",
    email: "",
  };

  if (!isEmail(email) &&  email?.trim().length  > 100) {
    errors.email = "invalid email";
    errors.exists = true;
  }
  if (username?.trim().length < 4 && username?.trim().length > 20) {
    errors.username = "invalid username";
    errors.exists = true;
  }
  if (subject?.trim().length < 8 && subject?.trim().length > 50) {
    errors.subject = "invalid subject";

    errors.exists = true;
  }
  if (message?.trim().length < 20 && message?.trim().length > 300) {
    errors.message = "invalid message";
    errors.exists = true;
  }
  if (errors.exists) {
    res.status(406).json({ errors });
  } else {
    return next();
  }
};

module.exports = contactValidator;
