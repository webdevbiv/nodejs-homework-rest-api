const User = require("../../models/user");

const { subscriptionSchema } = require("../../schemas/userJoi");
const { HttpError } = require("../../helpers");

const subscription = async (req, res, next) => {
  const { error } = subscriptionSchema.validate(req.body);

  if (error) {
    throw HttpError(400, "Missing field subscription or subscription value is incorrect");
  }
  const { _id } = req.user;
  console.log(_id);

  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });

  res.status(200).json(result);
};

module.exports = subscription;
