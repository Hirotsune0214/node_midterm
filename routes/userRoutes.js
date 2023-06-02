// auth has register and login and maybe user's data

const express = require("express");
const { showUserProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/profile", showUserProfile);

module.exports = router;
