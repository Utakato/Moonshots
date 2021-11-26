const Project = require("../models/project-model.js")


// implement:  limit: 20, skip: 20
// implement: sort: anything.

exports.getProject = async (req, res) => {
    console.log(req.query)

    Project
        .find()
        .sort(req.query)
        .limit(20)
        .exec((err, results) => {
            err ? console.log(err) : res.json({results})
        })
    }
