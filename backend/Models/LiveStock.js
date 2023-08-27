const mongoose = require("mongoose");

const LiveStockSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  species: {
    type: String,
  },
  begin: {
    type: String,
  },
  end: {
    type: String,
  },
  weight: {
    type: String,
  },
  expense: {
    type: String,
  },
});

module.exports = mongoose.model("LiveStock", LiveStockSchema);
