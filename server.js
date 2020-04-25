
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json())

var databaseToUse = "";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  databaseToUse =
    'mongodb://searchcury:searchcury55@ds129651.mlab.com:29651/heroku_8g056qpz'
} else {
  databaseToUse = "mongodb://localhost/searchcury";
}




app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || databaseToUse;

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});








