const express = require('express');
// const liked = require('../controllers/likes.controller');
const likePost = require('../controllers/likes.controller');

const likeRouter = express.Router();

likeRouter.post('/post/:crudId/like',likePost);

module.exports = likeRouter;