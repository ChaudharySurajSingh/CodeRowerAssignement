const mongoose = require('mongoose');

const ConfigurationSchema = new mongoose.Schema({
  _id: { type: String },
  arrayData: { type: [[String]], default: [] },
  remark: { type: String, default: "" }        
}, { _id: false });

module.exports = mongoose.model('Configuration', ConfigurationSchema);
