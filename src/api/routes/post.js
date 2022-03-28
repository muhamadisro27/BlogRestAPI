const express = require("express")

const router = express.Router()

const { 
   getPosts, 
   createPost ,
   getPost, 
   updatePost,
   updatePublishPost,
   deletePost,
   
} = require("../controllers/post")


router.get("/", getPosts)
router.post("/", createPost)
router.get("/:id", getPost)
router.put("/:id", updatePost)
router.patch("/:id", updatePublishPost)
router.delete("/:id", deletePost)

module.exports = router