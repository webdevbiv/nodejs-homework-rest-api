const Contact = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, ...query } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner, ...query }, "name email phone favorite", { skip, limit }).populate("owner", "name email");

  const count = await Contact.countDocuments({ owner, ...query });

  const totalPages = Math.ceil(count / limit);
  console.log(count);

  res.json({ contacts: result, totalPages: totalPages });
};

module.exports = listContacts;
