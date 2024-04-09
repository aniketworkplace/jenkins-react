import express from "express";
const app = express();

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.send("build/index.html");
});

app.listen(5000, () => {
  console.log("server started");
});
