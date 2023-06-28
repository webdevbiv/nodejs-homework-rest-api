const HttpError = require("../helpers/HttpError");

const fileExists = async (req, file, next) => {
  // console.log("exists", req.body);
  // if (!file || file === undefined) {
  //   next(HttpError(400, "<No image file was sent>"));
  // }
  if (!req.files || Object.keys(req.files).length === 0) {
    next(HttpError(400, "No file was sent."));
  }
  next();
};

module.exports = fileExists;
