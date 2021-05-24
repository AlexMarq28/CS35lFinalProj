const express = require("express");
const router = express.Router();

// Item Model (bring in item model)
const Item = require("../../models/Item");

// @route GET request to api/items
// @desc Get All Items
// @access Public

//the slash represents endpoint of api/items, already in correct file
router.get("/", (req, res) => {
  //want to fetch items from database
  Item.find()
    .sort({ date: -1 }) // will sort in descending order
    .then((items) => res.json(items)); //will fetch items from database
});

// @route POST request to api/items
// @desc Create An Item
// @access Public

//the slash represents endpoint of api/items, already in correct file
router.post("/", (req, res) => {
  //want to construct an item to insert into the database
  //pass in an object to new Item, name will come from request
  const newItem = new Item({
    name: req.body.name,
  });
  //date is automatically inserted

  //save object to database, promise-based(asychronous function that lets you do something
  //if it succeeds and do something else if it fails)
  newItem.save().then((item) => res.json(item));
});

// @route DELETE request to api/items/:id
// @desc Delete An Item
// @access Public

//the /:id represents a placeholder for whatever we pass in as an id
router.delete("/:id", (req, res) => {
  //first find the item you want to delete
  Item.findById(req.params.id) //will fetch id from url
    .then((item) =>
      item.remove().then(() => res.json({ successFetchItem: true }))
    )
    //promise reject if id is not found, catch the error
    .catch((err) => res.status(404).json({ successFetchItem: false }));
});

module.exports = router; //so other files can read it
