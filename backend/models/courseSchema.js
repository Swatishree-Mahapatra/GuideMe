const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    url: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type : Number,
      default:0,
  },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
