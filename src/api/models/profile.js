module.exports = (sequelize,Sequelize) => {
   const Profile = sequelize.define("profiles", {
      uuid : {
         type : Sequelize.UUID,
         allowNull : false,
      },
      post_id : {
         type : Sequelize.INTEGER,
         allowNull : false,
      },
      name : {
         type : Sequelize.STRING,
         allowNull : false,
      },
      age : {
         type : Sequelize.INTEGER,
         allowNull : false,
      },
      sex : {
         type : Sequelize.STRING,
         allowNull : false,
      },
   })

   Profile.associate = models => {
      Profile.hashMany(models.Post, {
         foreignKey : 'post_id',
         as : 'post',
      })
   }

   return Profile
}