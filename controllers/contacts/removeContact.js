const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Contact not found with id: ${contactId}`);
  }
  res.json({ message: "Contact deleted successfully" });
};

module.exports = removeContact;
