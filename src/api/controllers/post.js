module.exports = {
   getPosts : async (req,res) => {
      res.json({
         "message" : "get all posts"
      })
   },
   createPost : async (req,res) => {
      res.json({
         "message" : "create a post"
      })
   }
}