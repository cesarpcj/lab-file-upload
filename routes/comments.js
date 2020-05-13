const { Router } = require("express");
const commentRouter = Router();
const Post = require("./../models/post.js");

//post/:id/
commentRouter.post("/new", (req, res) => {
  const content = req.body.content;
  const creatorId = req.user._id;
  const postId = req.body.id;
  Post.findById(postId)
    .then((post) => {
      post.comments.push({
        content,
        creatorId,
      });

      post.save();
      res.redirect("/post/" + postId);
    })

    .catch((error) => {
      next(error);
    });
});

module.exports = commentRouter;
