const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fieldName: {
    type: String,
    required: true,
    maxlength: 25,
  },
  feildArea: {
    type: String,
    required: true,
    maxlength: 25,
  },
  yeilds: {
    type: String,
    required: true,
  },
  cropName: {
    type: String,
    required: true,
  },
  cropDuration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Crop", CropSchema);
