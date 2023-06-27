const { model } = require("mongoose");

const { handleMongooseError } = require("../middlewares");

const { userSchema } = require("../schemas");

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
