const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const callNewsApi = (req, res, next) => {
  request(
    `http://newsapi.org/v2/everything?q=${req.query.q}&apiKey=${process.env.GOOGLE_NEWS_API}`,
    (err, response, body) => {
      if (err) res.json({ error: err.message });
      else {
        response = JSON.parse(body);
        res.json(response);
      }
    }
  );
};

module.exports = callNewsApi;