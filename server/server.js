const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan =  require('morgan')
const passport = require("passport");
const cors =  require('cors')

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'))

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

app.use("/api/payments", require('./routes/api/payments'));
app.use("/api/deposit", require('./routes/api/deposit'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
////////////////////////////////////


//the apis
// http://localhost:5000/api/payments  ::: post
// http://localhost:5000/api/deposit  ::: post
/// go muma  models to confirm ma datatypes and names
////////////////////////////////////////////////////////////////