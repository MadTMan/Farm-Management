const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
    maxlength: 25,
  },
  category: {
    type: String,
    required: true,
    maxlength: 25,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", ItemSchema);
