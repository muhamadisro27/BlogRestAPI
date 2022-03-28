module.exports = (sequelize,Sequelize) => {
   const Post = sequelize.define("posts", {
      uuid : {
         type : Sequelize.UUID,
         allowNull : false,
      },
      title : {
         type : Sequelize.STRING,
         allowNull : false,
         trim : true,
         len : [10,255]
      },
      slug : {
         type : Sequelize.STRING,
         allowNull : false,
      },
      description : {
         type : Sequelize.TEXT,
         allowNull : false,
         trim : true,
         len : [10,255]
      },
      published : {
         type : Sequelize.BOOLEAN,
         allowNull : false,
      }
   })

   return Post
}