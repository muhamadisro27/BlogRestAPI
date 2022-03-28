module.exports = (sequelize,Sequelize) => {
   const Post = sequelize.define("post", {
      title : {
         type : Sequelize.STRING,
         allowNul : false,
         trim : true,
         len : [10,255]
      },
      description : {
         type : Sequelize.TEXT,
         allowNul : false,
         trim : true,
         len : [10,255]
      },
      published : {
         type : Sequelize.BOOLEAN,
         allowNul : false,
      }
   })

   return Post
}