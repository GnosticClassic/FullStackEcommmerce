import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! 12345");
});
app.listen(port, () => {
  console.log(`Device is listining at port ${port}`);
});
const kifle = "kifle"
const alem = "Alem"

