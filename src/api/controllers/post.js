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
       const service = new PostService(req)
       const createPost = service.createPost()
      
       res.send({
          message : "Success create a new post!",
          data : createPost,
       })

    } catch (err) {
       res.status(400).send({
          message : err.message || `Error on occurred!`
       })
    }

     
   },
   getPost : async (req,res) => {
      try {
         const service = new PostService(req)
         const post = await service.getPost()
   
         res.json({
            data : post
         }).send()

      } catch (err) {
         res.send(err)
      }
     

   },
   updatePost : async (req,res) => {
      try {
         const service = new PostService(req)
         const updatePost = await service.updatePost()

         res.send({
            message : "Success update data",
         })
      } catch (error) {
         res.status(500).send({
            message : error.message || `Error on occurred!`
         })
      }
   },
   updatePublishPost : async (req,res) => {
      try {
         const service = new PostService(req)
         const updatePublishPost = await service.updatePublishPost()

         res.send({
            message : `Data has been publish!`
         })
      } catch (error) {
         res.status(500).send({
            message : err.message 
         })
      }
   },
   deletePost : async (req,res) => {
      try {
         const service = new PostService(req)
         const deletePost = service.deletePost()
 
         res.send({
            message : `Success delete data!`
         })
      } catch (err) {
         res.status(500).send({
            message : err.message || `Error has on occurred!`
         })
      }
   }
}