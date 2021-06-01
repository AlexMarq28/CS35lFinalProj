const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Card Model (bring in card model)
const Card = require("../../models/Card");

// @route GET request to api/cards
// @desc Get All Cards
// @access Public

//the slash represents endpoint of api/cards, already in correct file
router.get("/", (req, res) => {
  //want to fetch items from database
  Card.find()
    .sort({ date: -1 }) // will sort in descending order
    .then((cards) => res.json(cards)); //will fetch cards from database
});

// @route POST request to api/cards
// @desc Create A Card
// @access Private

//the slash represents endpoint of api/cards, already in correct file
router.post("/", auth, (req, res) => {
  //want to construct a card to insert into the database
  //pass in an object to new Card, name will come from request
  const newCard = new Card({
    image: req.body.image,
    title: req.body.title,
    subtitle: req.body.subtitle,
    email: req.body.email,
    descript: req.body.descript,
    likes: req.body.likes,
  });
  //date is automatically inserted

  //save object to database, promise-based(asychronous function that lets you do something
  //if it succeeds and do something else if it fails)
  newCard.save().then((card) => res.json(card));
});

// @route DELETE request to api/cards/:id
// @desc Delete A Card
// @access Private

//the /:id represents a placeholder for whatever we pass in as an id
router.delete("/:id", auth, (req, res) => {
  //first find the card you want to delete
  Card.findById(req.params.id) //will fetch id from url
    .then((card) =>
      card.remove().then(() => res.json({ successFetchCard: true }))
    )
    //promise reject if id is not found, catch the error
    .catch((err) => res.status(404).json({ successFetchCard: false }));
});

module.exports = router; //so other files can read it
