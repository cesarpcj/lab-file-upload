const { Router } = require("express");
const postRouter = Router();
const uploader = require("./../middleware/uploader");
const Post = require("./../models/post");
const routeGuard = require("./../middleware/route-guard");

postRouter.get("/create", routeGuard, (req, res, next) => {
  res.render("create");
});

postRouter.post("/create", uploader.single("postPicture"), routeGuard, (req, res, next) => {
  const pictureUrl = req.file.url;
  const pictureName = req.file.originalname;
  const content = req.body.message;
  const creatorId = req.user._id;
  Post.create({
    pictureName,
    pictureUrl,
    creatorId,
    content,
  })
    .then((doc) => {
      console.log(doc);
      res.render("create");
    })
    .catch((error) => {
      next(error);
    });
});

postRouter.get("/post/:id", (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.render("show", post);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = postRouter;
