const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  theme: {
    type: String,
    default: "dark",
  },

  notifications: {
    type: Boolean,
    default: true,
  },

  credits: {
    type: Number,
    default: 42,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);