const signup = require("./signup");
const signin = require("./signin");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscription = require("./subscription");

const authController = {
  signup,
  signin,
  getCurrent,
  logout,
  subscription,
};

module.exports = authController;
