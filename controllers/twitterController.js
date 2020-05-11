const Twit = require('../services/TwitterService');
const {Twitter} = require('../config/db');
const publishToQueue = require('../services/MQSender');

exports.getTweets = async (req, res, next) => {
  const tweetName = req.body.query;

  let stream = Twit.stream('statuses/filter', {
    track: tweetName,
    language: 'en',
  });

  stream.on('tweet', function (tweet) {
    publishToQueue('tweet', tweet.toString());
    tweet.data = tweet;
    const twitter = new Twitter(tweet);
    twitter.save();
    res.status(200).json({ messageSent: true });
  });

  stream.on('error', function (err) {
    console.log(err);
  });
};
