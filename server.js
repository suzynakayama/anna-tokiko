const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const passport = require("passport");
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

require("dotenv").config();
require("./config/database");
require("./config/passport");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_EN !== "production") {
  app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
};

const LOGIN = process.env.LOGIN

app.use(LOGIN, require("./routes/api/users"));
app.use('api/projects', require('./routes/api/projects'));

const PORT = process.env.PORT || 3005;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on ${PORT}`);
});

module.exports = app;