
const mongoose = require('mongoose');

const presentSchema = new mongoose.Schema({
  name: String,
  iimage: String,// 'https://m.media-amazon.com/images/I/91UZ3yeiLxL._AC_SL1500_.jpg',
  price: Number,
  recipient: String,
  description: String
});

const Present = mongoose.model('Present', presentSchema);

module.exports = Present;


