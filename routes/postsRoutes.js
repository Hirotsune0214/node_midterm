const express = require("express");
const router = express.Router();

const {
  getPosts,
  getIndividualPosts,
} = require("../controllers/postsController");

router.route("/").get(getPosts);
router.route("/:id").get(getIndividualPosts);

module.exports = router;
