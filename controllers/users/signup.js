const bcrypt = require("bcryptjs");

const User = require("../../models/user");

const { HttpError } = require("../../helpers");

const { userRegisterSchema } = require("../../schemas/userJoi");

const signup = async (req, res, next) => {
  const { error } = userRegisterSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "<Помилка від Joi або іншої бібліотеки валідації>");
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  console.log(req);
  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL: req.avatarURL });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = signup;
