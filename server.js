
require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = ('./route/contactRoute.js')


const app = express()
const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(express.json())
app.use(cors())


app.listen(PORT, console.log(`This is server is poppin off`))