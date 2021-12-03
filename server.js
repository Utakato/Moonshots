const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const routes = require('./routes/api')
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, '.env') })


mongoDB = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@cluster0.flhu6.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

mongoose.connect(mongoDB)

app.use(bodyParser.json()) 
app.use(cors())
app.use(express.json())

app.use("/api", routes);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});




app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})