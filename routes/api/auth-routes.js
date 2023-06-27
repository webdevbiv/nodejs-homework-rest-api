const express = require("express");

const router = express.Router();

const { errorWrapper } = require("../../decorators");

const authController = require("../../controllers/users");

router.post("/signup", errorWrapper(authController.signup));
router.post("/signin", errorWrapper(authController.signin));

module.exports = router;
