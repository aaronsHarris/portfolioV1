
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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) =>
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html")))
}

const port = process.env.PORT || 3000
app.listen(port, console.log(`This is server is poppin off`))