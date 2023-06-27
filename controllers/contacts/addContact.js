const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");
const { contactAddSchema } = require("../../schemas");

const addContact = async (req, res, next) => {
  const { error } = contactAddSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
