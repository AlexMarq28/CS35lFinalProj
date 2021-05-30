const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// User Model
const User = require("../../models/User");

// @route POST request to api/users
// @desc Register new user
// @access Public

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for an existing user
  User.findOne({ email: email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });
    //generate a salt used to create a password hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          //when we send a token from react the userid is in there so that we know what user is doing requests
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            { expiresIn: 7200 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router; //so other files can read it
