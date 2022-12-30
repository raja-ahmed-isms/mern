import mongoose from "mongoose";

const Schema = mongoose.Schema;
const blogSchema = new Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  blogImage: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("blogs", blogSchema);
