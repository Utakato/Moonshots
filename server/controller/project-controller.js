const Project = require("../models/project-model.js")

exports.getProject = async (req, res) => {
    Project
        .find()
        .sort({'twitter_followers': -1})
        .limit(20)
        .exec((err, results) => {
            err ? console.log(err) : res.json({results})
        })
    }


