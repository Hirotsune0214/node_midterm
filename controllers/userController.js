// get data
// const users = require("../models/users");

const showUserProfile = (req, res) => {
  const username = req.session.username;
  const password = req.session.password;

  // no username then go back to login page and check current username
  // if (!username && users.test.username === username)
  // return res.redirect("/auth/login");

  const userData = { username, password };

  // const user = users.test.username === username ? users.test : null;

  // send profile data to userData
  res.render("profile", { userData });
};

module.exports = { showUserProfile };
