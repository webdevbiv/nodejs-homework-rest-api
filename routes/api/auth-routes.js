const express = require("express");

const router = express.Router();

const authController = require("../../controllers/users");

const { errorWrapper } = require("../../decorators");

const { authenticate, upload, generateAvatar } = require("../../middlewares");

router.post("/register", generateAvatar, errorWrapper(authController.signup));
router.post("/login", errorWrapper(authController.signin));
router.post("/logout", authenticate, errorWrapper(authController.logout));
router.get("/current", authenticate, authController.getCurrent);
router.patch("/", authenticate, errorWrapper(authController.subscription));
router.patch("/avatars", authenticate, upload.single("avatar"), errorWrapper(authController.avatar));

module.exports = router;
