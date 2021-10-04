const { appendFile } = require("fs");
const path = require("path");

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});
