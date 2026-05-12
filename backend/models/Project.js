const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: true,
  },

  code: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model(
  "Project",
  projectSchema
);