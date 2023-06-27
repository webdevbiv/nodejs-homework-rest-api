const bcrypt = require("bcryptjs");

const User = require("../../models/user");

const { HttpError } = require("../../helpers");

const { userRegisterSchema } = require("../../schemas/userJoi");

const signup = async (req, res, next) => {
  const { error } = userRegisterSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = signup;
