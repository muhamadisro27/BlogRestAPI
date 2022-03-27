const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000
const cors = require("cors")
const db = require("./config/db")

const whiteList = [
   'https://localhost:4001'
]

let corsOptions = {
   origin : (origin,callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
         callback(null,true)
      } else {
         callback(new Error("Not Allowed by CORS"))
      }
   }
}


// Import routes
const postRoutes = require("./api/routes/post")

// middleware
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// sync db
db.sequelize.sync({force:true}).then(() => {
   // return db.sequelize.drop()
}).catch((err) => {
   console.error(err)
})

// Routes
app.use("/post", postRoutes)
app.use("/", (req,res) => {
   res.json({
      "message" : "index"
   })
})




app.listen(PORT, () => {
   console.log(`Server running on https://localhost:${PORT}`)
})