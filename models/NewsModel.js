const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NewsSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  data: Object,
});

module.exports = {
  NewsSchema
}
