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

  if (!isEmail(email)) {
    errors.email = "Email is invalid";
    errors.exists = true;
  }
  if (username?.trim().length < 1) {
    errors.username = "Username is required";
    errors.exists = true;
  }
  if (subject?.trim().length < 8) {
    errors.subject = "Subject should be at least 8 characters long";

    errors.exists = true;
  }
  if (message?.trim().length < 20) {
    errors.message = "Message should be at least 8 characters long";
    errors.exists = true;
  }
  if (errors.exists) {
    res.status(406).json({ errors });
  } else {
    return next();
  }
};

module.exports = contactValidator;
