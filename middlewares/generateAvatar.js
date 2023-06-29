const gravatar = require("gravatar");

const generateAvatar = (req, res, next) => {
  const { email } = req.body;

  const avatarURL = gravatar.url(email, { s: "200", r: "pg", d: "retro" });
  req.avatarURL = avatarURL;
  next();
};

module.exports = generateAvatar;
