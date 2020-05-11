const dotenv = require('dotenv');
dotenv.config();
const newsService = async (q) => {
  let api = process.env.GOOGLE_NEWS_API;
  api = api + q + '&apiKey=' + process.env.API_KEY;
  return api;
};

module.exports = newsService;
