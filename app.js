const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.listen(3000, () => console.log("Port is litening on port 3000"));
