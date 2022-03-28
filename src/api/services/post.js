const db = require("../../config/db")
const Post = db.post

class PostService {
   constructor(req) {
      this.body = req.body;
      this.params = req.params
   }

   getPosts = async () => {
      const post = await Post.findAll()

      return post
   }
   createPost = async() => {
      if(!this.body.title) {
         res.status(400).send({
            "message" : "Title can not be empty!"
         })
      }
      if(!this.body.description) {
         res.status(400).send({
            "message" : "Description can not be empty!"
         })
      }
      if(!this.body.published) {
         res.status(400).send({
            "message" : "Published can not be empty!"
         })
      }

      const { title , description , published } = this.body

      const post = {
         title ,
         description,
         published : published ? published : false
      }

      const createPost = await Post.create(post)

      return createPost
   }
   getPost = async() => {
      const {id} = this.params

      const post = await Post.findOne({where : {
         id
      }})

      return post
   }
   updatePost = async() => {
      const {id} = this.params

      const {title,description, published} = this.body

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

      const updatePost = await Post.update(post, {
         where : {id}
      })

      return updatePost
   }
   updatePublishPost = async() => {
      const {id} = this.params

      const post = await Post.update({published : this.body.published},{where : {id}})

      return post
   }
   deletePost = async() => {
      const {id} = this.params

      if (!id === 1) {
         res.status(404).send({
            message : `Data with id = ${id} not found`
         })
      }

      const post = await Post.destroy({
         where : {
            id
        }
      })

      return post
   }
}


module.exports = PostService