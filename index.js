import express from "express";
const app = express();

app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile("dist/index.html");
});

app.listen(4000, () => {
  console.log("server started");
});
