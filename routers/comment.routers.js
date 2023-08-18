const express = require('express');
const commentRouter = express.Router();
const commentPost = require('../controllers/comments.controllers');

commentRouter.post("/post/:crudId/comment", commentPost);

module.exports = commentRouter;