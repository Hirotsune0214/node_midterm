const categories = require("../models/categories");

const getCategories = async (req, res) => {
  const categoriesList = await categories.categoriesModel
    .find({})
    .populate("posts");
  res.json(categoriesList);
  res.render("categories");
};

const getIndividualCategories = async (req, res) => {
  const individualCategories = await categories.categoriesModel
    .findById(req.params.id)
    .populate("posts");
  res.json(individualCategories);
};

module.exports = { getCategories, getIndividualCategories };
