const express = require("express")

const router = express.Router()

const { getPosts, createPost , getPost} = require("../controllers/post")


router.get("/", getPosts)
router.post("/", createPost)
router.get("/:id", getPost)

module.exports = router