const posts = require("../models/posts");
const users = require("../models/users");

const getPosts = async (req, res) => {
  const postsList = await posts.postsModel
    .find({})
    .populate("users")
    // populate = refフィールドのObjectIdに紐付いた別スキーマのドキュメントをJOINする
    .populate("tags")
    .populate("categories");
  res.json(postsList);
  res.render("post");
};

const getIndividualPosts = async (req, res) => {
  const individualPosts = await posts.postsModel
    .findById(req.params.id)
    .populate("users")
    .populate("tags")
    .populate("categories");
  res.json(individualPosts);
};

module.exports = { getPosts, getIndividualPosts };
