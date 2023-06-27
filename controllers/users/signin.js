const bcrypt = require("bcryptjs");

const User = require("../../models/user");

const { HttpError } = require("../../helpers");

const { userLoginSchema } = require("../../schemas/userJoi");

const signin = async (req, res, next) => {
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "No such user with this email");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Wrong email or password");
  }

  const token = "dfqweqweq.qweqweqw.qweqweqw";

  res.json({ token });
};

module.exports = signin;
