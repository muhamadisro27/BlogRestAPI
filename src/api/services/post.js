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

   

}


module.exports = PostService