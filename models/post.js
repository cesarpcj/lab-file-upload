const mongoose = require("mongoose");
const commentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  imageUrl: {
    type: String,
  },
  imageName: {
    type: String,
  },
});
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  pictureUrl: {
    type: String,
    required: true,
  },
  pictureName: {
    type: String,
    required: true,
  },

  comments: [commentsSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
