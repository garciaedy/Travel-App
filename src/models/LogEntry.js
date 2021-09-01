import mongoose from "mongoose";
const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  comments: String,
  rating: {
      type: Number,
      min: 0,
      max:10,
      default: 0,
  }


  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
