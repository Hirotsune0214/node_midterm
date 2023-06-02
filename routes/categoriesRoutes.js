const express = require("express");
const router = express.Router();

const {
  getCategories,
  getIndividualCategories,
} = require("../controllers/categoriesController");

router.route("/").get(getCategories);
router.route("/:id").get(getIndividualCategories);

module.exports = router;
