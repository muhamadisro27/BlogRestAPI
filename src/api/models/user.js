module.exports = (sequelize,Sequelize) => {
   const User = sequelize.define("users" , {
      uuid : {
         type : Sequelize.UUID,
         allowNull : false,
      },
      profile_id : {
         type : Sequelize.INTEGER,
      },
      username : {
         type : Sequelize.STRING,
         allowNull : false,
         trim : true,
      },
      password : {
         type : Sequelize.STRING,
         allowNull : false,
      },
      email : {
         type : Sequelize.STRING,
         allowNull : false,
         trim : true,
      },
      is_active : {
         type : Sequelize.BOOLEAN,
         allowNull : false,
         defaultValue : true,
      }
   })

   User.associate = models => {
      // User.hashMany(models.Post, {
      //    onDelete : "cascade",
      // })

      User.belongsTo(models.Profile , {
         foreignKey : 'profile_id',
         as : 'profile'
      })
   }

   return User
}