const { model } = require("mongoose");

const { handleMongooseError } = require("../helpers");

const { contactSchema } = require("../schemas");

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
