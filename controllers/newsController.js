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