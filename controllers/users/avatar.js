const Jimp = require("jimp");

const fs = require("fs/promises");

const path = require("path");

const User = require("../../models/user");

const { userAvatarSchema } = require("../../schemas");
const { HttpError } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");

const avatar = async (req, res, next) => {
  const { error } = userAvatarSchema.validate(req.file);

  if (error) {
    throw HttpError(400, error.message);
  }

  const { path: oldPath, filename } = req.file;
  const newPath = path.join(avatarsDir, filename);

  const image = await Jimp.read(oldPath);
  await image.resize(250, 250).write(newPath);

  const userAvatar = path.join("avatars", filename);

  await fs.unlink(oldPath);
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(_id, { avatarURL: userAvatar }, { new: true });

  res.status(200).json({
    avatarURL: result.avatarURL,
  });
};

module.exports = avatar;
