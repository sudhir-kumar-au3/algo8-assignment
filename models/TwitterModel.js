const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TwitterSchema = new Schema({
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
  TwitterSchema
}
