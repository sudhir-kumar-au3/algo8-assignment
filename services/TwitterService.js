const Twit = require('twit');
const dotenv = require('dotenv');
dotenv.config();
const options = {
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true, 
};

const T = new Twit(options);

module.exports = T;
