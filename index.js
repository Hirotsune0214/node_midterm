const cookies = require("cookie-session");
const express = require("express");
// const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

// connect to DB
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/midterm", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.error("connected to database"));

app.use(
  cookies({
    name: "user",
    keys: ["key1", "key2"],
  })
);

// route variable
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const categoriesRoute = require("./routes/categoriesRoutes");
const postRoute = require("./routes/postsRoutes");
const tagsRoute = require("./routes/tagsRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// routers 書き方に問題がある可能性(+)
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/categories", categoriesRoute);
app.use("/post", postRoute);
app.use("/tags", tagsRoute);

app.listen(4000, () => console.log("Server is working"));
