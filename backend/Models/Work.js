const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  rate: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  benefits: {
    type: String,
  },
});

module.exports = mongoose.model("Work", WorkSchema);
