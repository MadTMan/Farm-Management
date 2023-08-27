const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    maxlength: 25,
  },
  lname: {
    type: String,
    required: true,
    maxlength: 25,
  },
  username: {
    type: String,
    required: true,
    maxlength: 25,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 25,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default:
      "https://imgs.search.brave.com/jDaD2AVabGAKPLSE-cR6CFfmWyveJS17jAFQESFODm8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnN0/YWNrLmltZ3VyLmNv/bS9sNjBIZi5wbmc",
  },
  cover: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
});

module.exports = mongoose.model("User", UserSchema);
