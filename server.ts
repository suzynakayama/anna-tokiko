const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

require("dotenv").config();
require("./config/database");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_EN !== "production") {
  app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
};

app.use('api/users', require('./routes/api/users'));
app.use('api/projects', require('./routes/api/projects'));

const PORT = process.env.PORT || 3005;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on ${PORT}`);
});

module.exports = app;