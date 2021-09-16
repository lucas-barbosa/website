const contactsModel = require("../models/contactsModel");

const put_contact_message = (req, res) => {
  const { email, username, message, subject } = req.body;

  contactsModel.create(
    { email, username, message, subject },
    (err, contact) => {
      if (err) res.status(500).send(err.message);
      else res.status(201).json(contact);
    }
  );
};

module.exports = {
  put_contact_message,
};
