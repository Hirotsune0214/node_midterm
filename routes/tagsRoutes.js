const express = require("express");
const router = express.Router();

const { getTags, getIndividualTags } = require("../controllers/tagsController");

router.route("/").get(getTags);
router.route("/:id").get(getIndividualTags);

module.exports = router;
