const signup = require("./signup");
const signin = require("./signin");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscription = require("./subscription");
const avatar = require("./avatar");

const authController = {
  signup,
  signin,
  getCurrent,
  logout,
  subscription,
  avatar,
};

module.exports = authController;
