require("dotenv").config();

const { BASE_URL } = process.env;

const verifyEmail = (email, token) => {
  return {
    to: email,
    subject: "Verification",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${token}">Click to verify email</a>`,
  };
};

module.exports = verifyEmail;
