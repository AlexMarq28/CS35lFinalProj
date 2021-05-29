const express = require("express");
var fs = require("fs");
const router = express.Router();

//const upload = multer({dest: "uploads/"});
const path = require("path");


// Item Model (bring in item model)
const Photo = require("../../models/Photo");

var multer = require("multer");
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
});


//public folder setup
router.use(express.static('./public'));

// @route GET request to api/photos
// @desc Get All Photos
// @access Public

//the slash represents endpoint of api/items, already in correct file
router.get("/", (req, res) => {

  res.render('index');
  //want to fetch items from database
 /* Photo.find()
    .sort({ date: -1 }) // will sort in descending order
    .then((photos) => res.json(photos));*/ //will fetch items from database
});

// @route POST request to api/photos
// @desc Create A Photo
// @access Public
//upload.single(),
//the slash represents endpoint of api/photos, already in correct file
router.post("/",  (req, res) => {
  //want to construct an item to insert into the database
  //pass in an object to new Item, name will come from request
  const newPhoto = new Photo({
    photoCaption: req.body.photoCaption,
    img: req.body.img
  });
  //date is automatically inserted

  //save object to database, promise-based(asychronous function that lets you do something
  //if it succeeds and do something else if it fails)
  newPhoto.save().then((photo) => res.json(photo));
});

// @route DELETE request to api/items/:id
// @desc Delete An Item
// @access Public

//the /:id represents a placeholder for whatever we pass in as an id
router.delete("/:id", (req, res) => {
  //first find the item you want to delete
  Photo.findById(req.params.id) //will fetch id from url
    .then((photo) =>
      photo.remove().then(() => res.json({ successFetchPhoto: true }))
    )
    //promise reject if id is not found, catch the error
    .catch((err) => res.status(404).json({ successFetchPhoto: false }));
});

module.exports = router; //so other files can read it
