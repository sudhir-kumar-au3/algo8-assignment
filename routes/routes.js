const express = require('express');
const router = express.Router();
const { getTweets } = require('../controllers/twitterController');
const {newsController} = require('../controllers/googlenewsController');
router.get('/news', newsController);
router.route('/twitter').post(getTweets);


module.exports = router;
