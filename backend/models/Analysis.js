const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  code: String,
  language: String,
  result: Object,
}, { timestamps: true });

module.exports = mongoose.model('Analysis', analysisSchema);