const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: String,

    language: String,

    status: {
      type: String,
      default: "completed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("History", historySchema);