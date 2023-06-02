const bcrypt = require("bcrypt");
const { hashPassword } = require("../helpers/userHelper");
const jwt = require("jsonwebtoken");
const users = require("../models/users");
// get users
// const users = require("../models/users.json");

const showRegisterForm = (req, res) => {
  res.render("register");
};

const registerUser = async (req, res) => {
  const userName = req.body.username;
  const hashedPassword = await hashPassword(req.body.password);

  // req.session.username = userName;
  // res.redirect("/user/profile");

  try {
    const userObject = {
      username: userName,
      password: hashedPassword,
    };
    const createUser = await users.usersModel.create(userObject);
    // res.json(createUser);
    req.session.username = userName;
    req.session.password = hashedPassword;
    return res.redirect("/user/profile");
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

const showLoginForm = (req, res) => {
  res.render("login");
};

const logoutUser = (req, res) => {
  req.session = null;
  res.redirect("/auth/login");
};

const loginUser = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // const user = users.test.username == username ? users.test : null;

  // let isMatch;

  // if (user) {
  //   isMatch = await bcrypt.compare(password, user.password);
  // }

  // if (!user || !isMatch) return res.send("Invalid username or password");

  // if (isMatch) {
  //   req.session.username = username;
  //   return res.redirect("/user/profile");
  // }
  //   }
  // };
  try {
    const user = await users.usersModel.findOne({ username });

    if (!user) {
      res.json({
        error: true,
        message: "User not found!",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      // const accessToken = generateAccessToken(user);
      // res.json({ accessToken: accessToken });
      req.session.username = user.username;
      req.session.password = user.password;

      res.redirect("/user/profile");

      return;
    }
    res.json({
      error: true,
      message: "Invalid credentials!",
    });
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

module.exports = {
  showRegisterForm,
  showLoginForm,
  registerUser,
  logoutUser,
  loginUser,
};
