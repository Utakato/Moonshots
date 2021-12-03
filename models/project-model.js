const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	rank: Number,
    name: String,
    symbol: String,
    price: Number,
    market_cap: Number,
    link : String,
    watchlist: Number,
    twitter_followers: Number,
    twitter_link: String    
})

let Project = mongoose.model("Project", ProjectSchema, 'raw_data')

module.exports = Project
