const mongoose = require('mongoose');
const {NewsSchema} = require('../models/NewsModel');
const {TwitterSchema} = require("../models/TwitterModel");
const dotenv = require('dotenv');
dotenv.config();

let url;
if(process.env.DB_URL) url = process.env.DB_URL;
else url ="mongodb://localhost:27017/algo8";

const connection = mongoose.createConnection(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
connection.on("error", () => {
    console.log("> error occurred during db connection")
});
connection.on("open",() => {
    console.log("> successfully connected to db")
})
const News = connection.model("news", NewsSchema);
const Twitter = connection.model("twitter", TwitterSchema);
module.exports = {
    News,
    Twitter
}