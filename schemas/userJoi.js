const Joi = require("joi");

const { emailRegexp } = require("../constants/contacts");

const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

const userSubscriptionSchema = Joi.object({ subscription: Joi.string().valid("starter", "pro", "business").required() });

const userAvatarSchema = Joi.object({
  fieldname: Joi.string(),
  originalname: Joi.string(),
  encoding: Joi.string(),
  destination: Joi.string(),
  filename: Joi.string(),
  path: Joi.string(),
  size: Joi.number(),
  mimetype: Joi.string().valid("image/jpeg", "image/png", "image/gif").required(),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  userSubscriptionSchema,
  userAvatarSchema,
};
