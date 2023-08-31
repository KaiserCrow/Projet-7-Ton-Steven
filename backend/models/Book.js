const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});

const bookSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    ratings: [ratingSchema],
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
