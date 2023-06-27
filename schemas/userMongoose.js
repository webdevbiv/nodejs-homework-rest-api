const { Schema } = require("mongoose");

const { emailRegexp } = require("../constants/contacts");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = userSchema;
