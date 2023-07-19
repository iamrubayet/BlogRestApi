const { createPost, getAllPost, updatePost, deletePost, getPost } = require('../../controllers/authControllers/postController');
const { authMiddleware } = require('../../middlewares/auth');

const postRoute = require('express').Router();

postRoute.post("/",authMiddleware,createPost);
postRoute.get("/",getAllPost);
postRoute.get("/:postId",getPost);
postRoute.put("/:postId",authMiddleware,updatePost);
postRoute.delete("/:postId",authMiddleware,deletePost);




module.exports = postRoute;