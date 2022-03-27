const express = require("express")

const router = express.Router()

const { getPosts, createPost , getPost, deletePost} = require("../controllers/post")


router.get("/", getPosts)
router.post("/", createPost)
router.get("/:id", getPost)
router.delete("/:id", deletePost)

module.exports = router