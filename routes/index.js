"use strict";

const { Router } = require("express");
const router = new Router();
const Post = require("./../models/post");

router.get("/", (req, res, next) => {
  //console.log(req.user);
  Post.find()
    .populate("creatorId")
    .then((posts) => {
      res.render("index", { posts });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/private", (req, res, next) => {
  res.render("private");
});

module.exports = router;
