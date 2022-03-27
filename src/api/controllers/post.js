const db = require("../../config/db")
const Post = db.post

module.exports = {
   getPosts : async (req,res) => {
      try {
         const post = await Post.findAll()
         res.json({
            "message" : "Get all posts",
            "data" : post,
         })
      } catch (error) {
         console.error(error)
      }
   },
   createPost : async (req,res) => {
    try {
         if(!req.body.title) {
            res.status(400).send({
               "message" : "Title can not be empty!"
            })
         }
         if(!req.body.description) {
            res.status(400).send({
               "message" : "Description can not be empty!"
            })
         }
         if(!req.body.published) {
            res.status(400).send({
               "message" : "Published can not be empty!"
            })
         }

         const { title , description , published } = req.body

         const post = {
            title ,
            description,
            published
         }

         await Post.create(post).then((data) => {
            res.json({
               "status" : "success",
               "message" : "Success create a new post!",
               data
            },201)

         }).catch((err) => {
            res.status(500).send({
               message : err.message || "Some error occured while created post"
            })
         });
    } catch (err) {
       console.error(err)
    }

     
   },
   getPost : async (req,res) => {
      const {id} = req.params

      const post = await Post.findOne({where : {
         id
      }})

      res.json({
         data : post
      }).send()

   },
   deletePost : async (req,res) => {

   }
}