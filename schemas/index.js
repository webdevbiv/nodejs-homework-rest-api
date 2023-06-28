const { contactAddSchema, contactUpdateFavoriteSchema } = require("./contactJoi");
const contactSchema = require("./contactMongoose");
const { userRegisterSchema, userLoginSchema, userAvatarSchema, userSubscriptionSchema } = require("./userJoi");
const userSchema = require("./userMongoose");

module.exports = {
  contactAddSchema,
  contactSchema,
  contactUpdateFavoriteSchema,
  userRegisterSchema,
  userSchema,
  userLoginSchema,
  userAvatarSchema,
  userSubscriptionSchema,
};
