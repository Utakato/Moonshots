const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const routes = require('./routes/api')
const creds = require("../creds.js")
const port = process.env.port || 5000;

const app = express()

mongoDB = `mongodb+srv://${creds['user']}:${creds['password']}@cluster0.flhu6.mongodb.net/${creds['db']}?retryWrites=true&w=majority`
mongoose.connect(mongoDB)


app.use(bodyParser.json()) 
app.use(express.json())
app.use("/api", routes);


app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})