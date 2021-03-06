const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const restaurantsRouter = require("./routes/restaurants");

//PORT
const port = process.env.PORT || 5000;
console.log(process.env);

//Connection to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

//Parser
app.use(bodyParser.json());

app.use(cors());

//middleware (route for api)
app.use("/api/v1/restaurants", restaurantsRouter);

app.get("/", (req, res) => {
  res.send("HomePage");
});
