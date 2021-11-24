const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const routes = require('./routes/api')
const port = process.env.port || 5000;

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use("/api", routes);


app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})