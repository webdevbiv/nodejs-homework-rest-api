const User = require("../../models/user");

const { userSubscriptionSchema } = require("../../schemas/");
const { HttpError } = require("../../helpers");

const subscription = async (req, res, next) => {
  const { error } = userSubscriptionSchema.validate(req.body);

  if (error) {
    throw HttpError(400, "Missing field subscription or subscription value is incorrect");
  }
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });

  res.status(200).json(result);
};

module.exports = subscription;
