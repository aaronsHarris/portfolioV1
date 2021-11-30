
require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")

const contactRoute = require('./route/contactRoute.js')


const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())

app.use("/", contactRoute)

const port = process.env.PORT || 3000
app.listen(port, console.log(`This is server is poppin off`))