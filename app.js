const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/campgrounds", (req, res) => {
  res.render("campground/index");
});

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(3000, () => {
  console.log("ポート番号3000で受付中...");
});
