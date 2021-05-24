const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

// Bodyparser middleware is within express
app.use(express.json());

// Database Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB, use mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected...")) //if you connect then...
  .catch((err) => console.log(err));

// Use Routes, anything that goes to /api/items should refer to items variable (the items file)
app.use("/api/items", items);

// Serve static assets (would be build folder) if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  //Any request we get except /api/items should load up html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Serve static assets (from index.js in client) if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("../client/build"));
  //load the index.html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// Creating variable for the port, env.PORT is an environmental variable
const port = process.env.PORT || 5000;

//Kill the port if necessary to avoid weird warnings
//npx kill-port 5000

//listen on the port
app.listen(port, () => console.log(`Server started on port: ${port}`));

// ---------------------------------------------

// import bodyParser from 'body-parser';
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

// import userRoutes from './routes/users.js'

// const app = express();

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.use('/user', userRoutes);

// const CONNECTION_URL = 'mongodb+srv://onzerem:onzerem123@cluster0.ixo3s.mongodb.net/cs35lproj?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 4000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
