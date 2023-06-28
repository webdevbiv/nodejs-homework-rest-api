const { Schema } = require("mongoose");

const { nameRegexp, phoneRegexp, emailRegexp } = require("../constants/contacts");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: nameRegexp,
    },
    email: {
      type: String,
      required: true,
      match: emailRegexp,
    },
    phone: {
      type: String,
      required: true,
      match: phoneRegexp,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = contactSchema;
