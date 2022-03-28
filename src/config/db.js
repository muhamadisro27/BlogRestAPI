const dbConfig = require("./db_config")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB , dbConfig.USER, dbConfig.PASSWORD, {
   host : dbConfig.HOST,
   dialect : dbConfig.dialect,
   operatorAliases : false,
   pool : {
      max : dbConfig.pool.max,
      min : dbConfig.pool.min,
      acquire : dbConfig.pool.acquire,
      idle : dbConfig.pool.idle,
   }
})

const db = {
   Sequelize,
   sequelize
}

db.user = require("../api/models/user")(sequelize,Sequelize)
db.profile = require("../api/models/profile")(sequelize,Sequelize)
db.post = require("../api/models/post")(sequelize,Sequelize)

module.exports = db