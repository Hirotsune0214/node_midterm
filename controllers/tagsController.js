const tags = require("../models/tags");

const getTags = async (req, res) => {
  const tagsList = await tags.tagsModel.find({}).populate("posts");
  res.json(tagsList);
  res.render("tags");
};

const getIndividualTags = async (req, res) => {
  const individualTags = await tags.tagsModel
    .findById(req.params.id)
    .populate("posts");
  res.json(individualTags);
};

module.exports = { getTags, getIndividualTags };
