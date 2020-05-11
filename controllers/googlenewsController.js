// const publishToQueue = require('../services/MQSender');
// const newsService = require('../services/newsService');
// const {News} = require('../config/db');
// const axios = require('axios');


// exports.getGoogleNews = async (req, res, next) => {
//   const newsName = req.query.q;
//   const resultNews = await newsService(newsName);
//   let result = '';
//   try {
//     result = await axios.get(resultNews);
//     const news = new News(result);
//     news.save();
//   } catch (error) {
//     console.log(error.red);
//   } finally {
//     publishToQueue('news', result.data.toString());
//     res.status(200).json(result.data);
//   }
// };
const callNewsApi = require('../services/apiRequest');

const newsController = (req, res) => {
    callNewsApi(req, res, (err, result) => {
        if(err) res.send(err);
        res.json(result)
    })
}
module.exports = {
    newsController
}