const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 4000

// Import routes
const postRoutes = require("./api/routes/post")

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// Routes
app.use("/", (req,res) => {
   res.json({
      "message" : "index"
   })
})
app.use("/post", postRoutes)



app.listen(PORT, () => {
   console.log(`Server running on https://localhost:${PORT}`)
})