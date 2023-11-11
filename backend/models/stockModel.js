const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
});

module.exports = mongoose.model('Stock', stockSchema, 'stocks');
