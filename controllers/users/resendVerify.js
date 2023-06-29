const User = require("../../models/user");

const { HttpError, sendEmail } = require("../../helpers");
const { userEmailSchema } = require("../../schemas");
const verifyEmail = require("../../constants/emailTemp");

const resendVerify = async (req, res, next) => {
  const { error } = userEmailSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "<Помилка від Joi або іншої бібліотеки валідації>");
  }
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401);
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  await sendEmail(verifyEmail(email, user.verificationToken));

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
