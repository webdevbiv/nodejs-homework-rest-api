const { Schema } = require("mongoose");

const { emailRegexp } = require("../constants/contacts");

const userSchema = new Schema(
  {
    avatarURL: String,
    email: {
      type: String,
      match: emailRegexp,
      require: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = userSchema;
