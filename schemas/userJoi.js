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

const subscriptionSchema = Joi.object({ subscription: Joi.string().valid("starter", "pro", "business").required() });

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  subscriptionSchema,
};
