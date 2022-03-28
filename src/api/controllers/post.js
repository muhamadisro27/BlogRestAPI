const PostService = require("../services/post") 

module.exports = {
   getPosts : async (req,res) => {
      try {
         const service = new PostService(req)
         const posts = await service.getPosts()

         res.send({
            "message" : "Get all posts",
            "data" : posts,
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
            published : published ? published : false
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
      try {
         const {id} = req.params

         const post = await Post.findOne({where : {
            id
         }})
   
         res.json({
            data : post
         }).send()
      } catch (err) {
         res.send(err)
      }
     

   },
   updatePost : async (req,res) => {
      const {id} = req.params

      const {title,description, published} = req.body

      if(!title) {
         res.status(400).send({
            message : "Title can not be empty!"
         })
      }
      if(!description) {
         res.status(400).send({
            message : "Title can not be empty!"
         })
      }
      if(!published) {
         res.status(400).send({
            message : "Title can not be empty!"
         })
      }

      const post = {
         title,description, published
      }

      await Post.update(post, {
         where : {id}
      }).then(() => {
         res.send({
            status : "success",
            message : `Post with id ${id} has been updated!`,
         },200)
      }).catch((err) => {
         res.status(500).send({
            status : "failed",
            message : err.message || `Post with id ${id} fail to update!`
         })
      })
   },
   updatePublishPost : async (req,res) => {
      const {id} = req.params

      await Post.update({published : req.body.published},{where : {id}}).then(() => {
         res.send({
            message : `Data with id ${id} has been publish!`
         }).catch((err) => {
            res.status(500).send({
               message : err.message || `Data with id ${id} fail to publish!`
            })
         })
      })
   },
   deletePost : async (req,res) => {
         const {id} = req.params

         await Post.destroy({
            where : {
               id
           }
         }).then((result) => {
            if (result === 1) {
               res.send({
                  message : "Post was deleted succesfully"
               })
            } else {
               res.send({
                  message : "Can not deleted post with id = " + id
               })
            }
         }).catch((err) => {
            res.status(500).send({
               message : err.message || `Can not delete post with id = ${id}`
            })
         })
       

   }
}