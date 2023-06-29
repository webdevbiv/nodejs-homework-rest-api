const HttpError = require("../helpers");

const fileExists = async (req, res, next) => {
  const file = req.files;
  console.log("fileExists:", file);
  if (!file) {
    next(HttpError(400, "No file uploaded"));
  }
  next();
};

module.exports = fileExists;
