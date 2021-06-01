const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const app = express();

// Bodyparser middleware is within express
app.use(express.json());

//EJS
//app.set('view engine', 'ejs');

// Database Config
const db = config.get("mongoURI");
//const db = require("./config/keys").mongoURI;

// Connect to MongoDB, use mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected...")) //if you connect then...
  .catch((err) => console.log(err));

// Use Routes, anything that goes to /api/something should refer to the respective variable (the items, users, etc. file)
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/cards", require("./routes/api/cards"));

// Serve static assets (would be build folder) if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  //Any request we get except /api/items should load up html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Creating variable for the port, env.PORT is an environmental variable
const port = process.env.PORT || 5000;

//Kill the port if necessary to avoid weird warnings
//npx kill-port 5000

//listen on the port
app.listen(port, () => console.log(`Server started on port: ${port}`));

//FORMAT FOR BACKEND URI
//"mongodb+srv://anyUser:anyWord@cluster0.c8qdd.mongodb.net/ExerciseProfiles?retryWrites=true&w=majority"
