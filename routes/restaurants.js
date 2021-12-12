const express = require("express");
const router = express.Router();
const Restaurants = require("../models/restaurants");

// Home page route - all objects
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurants.find();
    console.log("Connected");
    res.status(200).json(restaurants);
  } catch (err) {
    console.log(err);
    res.status(404).json({ error: err });
  }
});

//Find one
router.get("/:id", async (req, res) => {
  try {
    const singleRestaurant = await Restaurants.findById(req.params.id);
    res.status(200).json(singleRestaurant);
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

//POST - Create one
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newRestaurant = new Restaurants(req.body);
    console.log(newRestaurant);
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.log("Somth gone wrong");
    console.log(err);
    res.json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurants.findById(req.params.id);
    Object.assign(restaurant, req.body);
    await restaurant.save();
    res.json(restaurant);
  } catch (err) {
    console.log(err);
    res.json({ error: err });
  }
});

module.exports = router;
