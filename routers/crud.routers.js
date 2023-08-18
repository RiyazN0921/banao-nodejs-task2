const express = require('express');

const crudRouter = express.Router();
const crudController = require("../controllers/crud.controllers");

crudRouter.post('/post', crudController.createPost);

crudRouter.get('/post', crudController.ViewAllPosts);

crudRouter.put('/post/:idPost', crudController.updatePost);

crudRouter.delete('/post/:idPost', crudController.deletePost);

module.exports = crudRouter;