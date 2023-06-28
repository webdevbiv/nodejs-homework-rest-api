const express = require("express");

const router = express.Router();

const authController = require("../../controllers/users");

const { errorWrapper } = require("../../decorators");

const { authenticate } = require("../../middlewares");

router.post("/register", errorWrapper(authController.signup));
router.post("/login", errorWrapper(authController.signin));
router.post("/logout", authenticate, errorWrapper(authController.logout));
router.get("/current", authenticate, authController.getCurrent);
router.patch("/", authenticate, errorWrapper(authController.subscription));

module.exports = router;
